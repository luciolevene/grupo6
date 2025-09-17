// controllers/mainController.js
const mainController = {
    index: (req, res) => {
        // Datos de prueba hasta tener base de datos
        const productos = [
            { id: 1, nombre: "Cafetera Moulinex", descripcion: "Cafetera eléctrica automática", comentarios: 12 },
            { id: 2, nombre: "Televisor Samsung", descripcion: "Smart TV 50 pulgadas", comentarios: 8 },
            { id: 3, nombre: "Notebook HP", descripcion: "Core i5, 8GB RAM", comentarios: 20 }
        ];
        res.render("index", { productos }); 
    },

    login: (req, res) => {
        res.render("login");
    },

    register: (req, res) => {
        res.render("register");
    },

    profile: (req, res) => {
        res.render("profile");
    },

    product: (req, res) => {
        res.render("product");
    }
};

module.exports = mainController;
