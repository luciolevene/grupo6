const db = require('../database/models');

const mainController = {
  index: function (req, res) {
    let logeado = false;

    if (req.session && req.session.userLogueado) {
      logeado = true;
    } else if (req.cookies && req.cookies.usuario) {
      req.session.userLogueado = req.cookies.usuario;
      logeado = true;
    }

    db.Product.findAll({
      include: [
        { association: 'user' },
        { association: 'comentarios' }
      ]
    })
    .then(function (productos) {
      return res.render('index', { productos: productos, logeado: logeado });
    });
  }
};

module.exports = mainController;
