const productController = {
    lista: function (req, res) {
        res.render('products/lista');
    },
    detalle : function (req, res) {
        res.render('products/detalle');
    },
    add: function (req, res) {
        res.render('products/add');
    }
}

module.exports = productController;
