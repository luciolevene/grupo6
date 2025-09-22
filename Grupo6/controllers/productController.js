const data = require("../db");

const productController = {
    lista: function (req, res) {
        res.render('products/lista');
    },

    detalle: function (req, res) {
        const producto = {
            id: 1,
            nombre: "iPhone 14",
            descripcion: "Pantalla Super Retina XDR de 6,1 pulgadas y cámara dual avanzada.",
            comentarios: [
                { usuario: "Ana", texto: "Lo compre y la camara es increible", imagen: "/images/users/profile-default.png" },
                { usuario: "Leo", texto: "Muy caro pero vale la pena", imagen: "/images/users/profile-default.png" }
            ],
            imagen: "/images/products/iphone-14.jpg"
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
