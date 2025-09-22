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
    const query = req.query.search; 
    
    // detalles estatico s para entrega 1
    const resultados = [
        {
            nombre: "iPhone 14",
            descripcion: "Pantalla Super Retina XDR de 6,1 pulgadas y cámara dual avanzada.",
            imagen: "/images/products/iphone-14.jpg"
        },
        {
            nombre: "Samsung Galaxy S23",
            descripcion: "Pantalla Dynamic AMOLED 2X y procesador Snapdragon 8 Gen 2.",
            imagen: "/images/products/samsung-galaxys23.jpg"
        }
    ];

    res.render('search-results', {
        search: query,
        products: resultados
    });
},

    create: function (req, res) {
       
    }

  


   
};

module.exports = productController;
