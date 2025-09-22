const data = require("../db");


const mainController = {
    index: function(req, res) {
        
        res.render("index", { productos: data.productos, logeado: true}); 
    },

};

module.exports = mainController;
