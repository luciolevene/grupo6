const mainController = {
    index: (req, res) => {
        // Datos de prueba hasta tener base de datos
        const productos = [
            { 
                id: 1, 
                nombre: "Cafetera Moulinex", 
                descripcion: "Cafetera eléctrica automática", 
                comentarios: 12,
                imagen: "/images/products/img-cafetera-moulinex.jpg"
            },
            { 
                id: 2, 
                nombre: "Televisor Samsung", 
                descripcion: "Smart TV 50 pulgadas", 
                comentarios: 8,
                imagen: "/images/products/img-tv-samsung-smart.jpg"
            },
            { 
                id: 3, 
                nombre: "Notebook HP", 
                descripcion: "Core i5, 8GB RAM", 
                comentarios: 20,
                imagen: "/images/products/img-macbook-pro-2019.jpg"
            },
            { 
                id: 4, 
                nombre: "Celular Samsung Galaxy S10", 
                descripcion: "Celular alta gama", 
                comentarios: 15,
                imagen: "/images/products/img-samsung-galaxy-s10.jpg"
            }
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
