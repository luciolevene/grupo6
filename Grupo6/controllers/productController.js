const data = require("../db");
const db = require('../database/models');
const { Op } = require('sequelize');


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
processAdd: function (req, res) {
    res.render('index', { productos: data.productos, logeado: true });
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
