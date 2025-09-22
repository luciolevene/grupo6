const data = require("../db");

const productController = {
    lista: function (req, res) {
        res.render('products/lista');
    },

  detalle: function (req, res) {
    const producto = data.productos[0]; 
    res.render('product', { producto });
},

    add: function (req, res) {
        res.render('product-add');
    },

search: function (req, res) {
    const products = data.productos[1];
    const search = ""; 
    res.render('search-results', { products, search });
},

    


   
};

module.exports = productController;
