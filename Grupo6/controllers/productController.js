const data = require("../db");
const db = require('../database/models');
const { Op } = require('sequelize');


const productController = {
    lista: function (req, res) {
        res.render('products/lista');
    },


    detalle: function (req, res) {
      var id = req.params.id; 
    
      db.Product.findByPk(id)
      .then(function (producto) {
        if (!producto) {
          return res.redirect('/');
        }
    
        var logeado = false;
        if (req.session && req.session.user) {
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
  if (req.session.user == undefined) {
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
      return res.send(error);
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


    


   
};

module.exports = productController;
