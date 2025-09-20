const data = require("../db");

const productController = {
    lista: function (req, res) {
        res.render('products/lista');
    },

    detalle: function (req, res) {
        const producto = {
            id: 1,
            nombre: "Cafetera Moulinex",
            descripcion: "Cafetera eléctrica automática",
            comentarios: [
                { usuario: "Juan", texto: "Muy buena cafetera", imagen: "/images/users/profile-default.png" },
                { usuario: "Ana", texto: "Me encanto muy buena la uso todos los días", imagen: "/images/users/profile-default.png" }
            ],
            imagen: "/images/products/img-cafetera-moulinex.jpg"
        };

        res.render('product', { producto }); 
    },

    add: function (req, res) {
        res.render('product-add');
    },

    search: function (req, res) {
       
        res.render('search-results', {
          search: '',                
          products: data.productos  
        });
      },
      


    create: function (req, res) {
       
    }

  


   
};

module.exports = productController;
