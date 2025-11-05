
const db = require('../database/models');

const op = db.Sequelize.Op;



const mainController = {
    index: function(req, res) {
        db.Product.findAll({
            include: [
                { association: 'user' },
                { association: 'comentarios'}
            ]
        })
        .then(function (productos) {
            res.render("index", { productos: productos, logeado: true });
          })
       
    },

    

};

module.exports = mainController;
