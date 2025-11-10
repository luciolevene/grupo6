const data = require("../db");
const db = require('../database/models');
const op = db.Sequelize.Op;


const productController = {
    lista: function (req, res) {
        res.render('products/lista');
    },


    detalle: function (req, res) {
      var id = req.params.id; 
    
      db.Product.findByPk(id,{
        include: [
        {association:'comentarios', include: [{ association:'user'}]  }, 
        {association: 'user' } ]
        })

      .then(function (producto) {
        if (!producto) {
          return res.redirect('/');
        }
    
        var logeado = false;
        if (req.session && req.session.userLogueado) {
          logeado = true;
        }
    
        return res.render('product', {
          producto: producto,
          logeado: logeado
        });
      })
      .catch(function (error) {
        console.log(error);
        res.redirect('/');
      });
    },


  addProduct: function (req, res) {
    res.render('product-add', { productos: data.productos, logeado: true });
},

processAdd: function (req, res) {
  if (req.session.userLogueado == undefined) {
    return res.redirect('/users/login')
  } 
  else {
    db.Product.create({
      imagen: req.body.imagen,                 
      nombre: req.body.nombre,                
      descripcion: req.body.descripcion,      
      idUsuario: req.session.userLogueado.id   
    })
    .then(function (producto) {
      return res.redirect('/users/profile');  
    })
    .catch(function (error) {
      console.log(error);
      
    });
  }
},

search: function (req, res) {
  const term = req.query.search;

  db.Product.findAll({
    where: {
      nombre: { [db.Sequelize.Op.like]: "%" + term + "%" }
    },
    include: [
      { association: "user" }
    ],
  })
  .then(function (products) {
    res.render("search-results", {
      products: products,
      search: term
    });
  })
  .catch(function (error) {
    console.log(error);
    res.render("search-results", {
      products: [],
      search: term
    });
  });
},

productComment: function(req, res) {
  if (req.session.userLogueado == undefined) {
      return res.redirect('/users/login')
  } 
  else {
      db.Comment.create({
          texto: req.body.comment,
          idUsuario: req.session.userLogueado.id,
          idProducto: req.params.id
      })
      .then(function (resultados) {
          return res.redirect('/products/detalle/' + req.params.id)
      })
      .catch(function (err) {
          console.log(err);
          
      })
  }
}


    


   
};

module.exports = productController;
