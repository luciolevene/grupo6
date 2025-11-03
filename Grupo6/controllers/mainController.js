const data = require("../db");

//test

const mainController = {
    index: function(req, res) {
        
        res.render("index", { productos: data.productos, logeado: true}); 
    },

};

module.exports = mainController;
