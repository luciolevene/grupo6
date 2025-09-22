
const data = require("../db");

const userController = {
    register: function (req, res) {
      res.render('register');
    },

    processRegister: function (req, res) {
    // Aquí podrías guardar el usuario, pero para redirigir:
    res.render('login');
    
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
      res.render('/');
    },


};
  
  module.exports = userController;
  