const data = require("../db");

const productController = {
    lista: function (req, res) {
        res.render('products/lista');
    },

  detalle: function (req, res) {
    const producto = data.productos[0]; 
    res.render('product', { producto,logeado: true  });
},

  addProduct: function (req, res) {
    res.render('product-add', { productos: data.productos, logeado: true });
},

search: function (req, res) {
    const products = data.productos.slice(0,3);
    const search = ""; 
    res.render('search-results', { products, search, logeado: true  });
},

    


   
};

module.exports = productController;
