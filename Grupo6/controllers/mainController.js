const data = require("../db");


const mainController = {
    index: function(req, res) {
        
        res.render("index", { productos: data.productos, logeado: false}); 
    },

};

module.exports = mainController;
