const productos = require("../db");


const mainController = {
    index: function(req, res) {
        
        res.render("index", { productos }); 
    },

    login: function(req, res) {
        res.render("login");
    },

    register: function(req, res) {
        res.render("register");
    },

    profile: function(req, res) {
        res.render("profile");
    },

    product: function(req, res)  {
        res.render("product");
    }
};

module.exports = mainController;
