
const data = require("../db");

const userController = {
    register: function (req, res) {
      res.render('register');
    },
    login: function (req, res) {
      res.render('login');
    },
    profile: function (req, res) {
     
      res.render('profile', {
        productos: data.productos,
        user: data.usuario        
      });
    },
    logout: function (req, res) {
      res.redirect('/');
    }
  };
  
  module.exports = userController;
  