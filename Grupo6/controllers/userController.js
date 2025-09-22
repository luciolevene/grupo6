
const data = require("../db");

const userController = {
    register: function (req, res) {
      res.render('register');
    },

    processRegister: function (req, res) {
    res.render('login');
    
  },
    login: function (req, res) {
      res.render('login');
    },

    processLogin: function (req, res) {
    res.render('index', { productos: data.productos });
},
    profile: function (req, res) {
     
      res.render('profile', {
        productos: data.productos,
        user: data.usuario        
      });
    },
    logout: function (req, res) {
      res.render('index', { productos: data.productos });

    },


};
  
  module.exports = userController;
  