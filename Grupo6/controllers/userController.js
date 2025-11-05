// controllers/userController.js
const bcrypt = require('bcryptjs');                 // hashing (hashSync / compareSync):contentReference[oaicite:5]{index=5}
const db = require('../database/models');           // modelos Sequelize (User, Product, Comment)

const usersController = {
    // GET /users/login
    login: function(req, res){
        // Evitar acceso a login si ya está logueado (control de acceso):contentReference[oaicite:6]{index=6}:contentReference[oaicite:7]{index=7}
        if (req.session.userLogueado) {
            return res.redirect('/users/profile');
        }
        return res.render('login');
    },

    // POST /users/processLogin
    processLogin: function (req, res) {
        db.User.findOne({
            where: { email: req.body.email }   // capturar datos por POST con req.body:contentReference[oaicite:8]{index=8}
        })
        .then(function(user){
            if(user != undefined){
                // en tu SQL el campo es "password"
                let passDb = user.password;
                // hashing: comparar texto plano vs hash (o permitir plano si cargaste sin hash):contentReference[oaicite:9]{index=9}
                let check = bcrypt.compareSync(req.body.password, passDb);
                if(check === true || passDb === req.body.password){
                    // guardar datos mínimos en session:contentReference[oaicite:10]{index=10}
                    req.session.userLogueado = {
                        id: user.id,
                        usuario: user.usuario,
                        email: user.email,
                        fotoPerfil: user.fotoPerfil
                    };

                    // cookie "recordarme" (en tu login.ejs el name es "remember"):contentReference[oaicite:11]{index=11}
                    if(req.body.remember != undefined || req.body.recordarme != undefined){
                        res.cookie('usuario', req.session.userLogueado, { maxAge: 1000 * 60 * 5 });
                    }
                    return res.redirect('/users/profile'); // cerrar ciclo con redirect:contentReference[oaicite:12]{index=12}
                } else {
                    return res.send('Contraseña incorrecta');
                }
            } else {
                return res.send('Email no registrado');
            }
        })
        .catch(err => {
            console.error(err);
            return res.status(500).render('error', { message: 'Error al iniciar sesión', error: err });
        });
    },

    // GET /users/profile
    profile: function(req, res){
        // proteger ruta con session:contentReference[oaicite:13]{index=13}:contentReference[oaicite:14]{index=14}
        if (!req.session.userLogueado) {
            return res.redirect('/users/login');
        }
        let userId = req.session.userLogueado.id;

        // incluir relaciones definidas en .associate (productos y comentarios):contentReference[oaicite:15]{index=15}:contentReference[oaicite:16]{index=16}
        db.User.findByPk(userId, {
            include: [
                {
                    association: "productos",
                    include: [{ association: "comentarios" }] // comentarios de cada producto
                },
                { association: "comentarios" }               // comentarios hechos por el usuario
            ]
        })
        .then(function(usuario){
            if(!usuario) {
                return res.redirect('/users/login');
            }
            // tu vista profile.ejs usa "user" y "productos"
            return res.render("profile", { user: usuario, productos: usuario.productos });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).render('error', { message: 'Error al cargar el perfil', error: err });
        });
    },

    // GET /users/profile/:id (opcional, mismo estilo que tu compañero)
    profilePorId: function(req, res){
        let userId = req.params.id;

        db.User.findByPk(userId, {
            include: [
                {
                    association: "productos",
                    include: [{ association: "comentarios" }]
                },
                { association: "comentarios" }
            ]
        })
        .then(function(usuario){
            if(!usuario) {
                return res.send("Usuario no encontrado");
            }
            return res.render("profile", { user: usuario, productos: usuario.productos });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).render('error', { message: 'Error al cargar el perfil', error: err });
        });
    },

    // GET /users/register
    register: function(req, res){
        if (req.session.userLogueado) {
            return res.redirect('/users/profile');
        }
        return res.render('register');
    },

    // POST /users/processRegister
    processRegister: function(req, res) {
        let password = req.body.password; 
        if (!password || password.length < 3) {
            return res.render('register', { error: "La contraseña debe tener al menos 3 caracteres." });
        }
        
        let email = req.body.email;

        // verificar email existente
        db.User.findOne({ where: { email: email } })
        .then(function(userInDB){
            if (userInDB) {
                return res.render('register', { error: "El email ya está registrado." });
            }

            // hashear password:contentReference[oaicite:17]{index=17}
            let passEncriptada = bcrypt.hashSync(password, 10);

            // crear usuario (.create()):contentReference[oaicite:18]{index=18}
            return db.User.create({
                email: req.body.email,
                password: passEncriptada,
                fotoPerfil: req.body.fotoPerfil || null,
                usuario: req.body.usuario
            });
        })
        .then(function(user){
            if(!user) return; // ya respondió por email duplicado
            // loguear directo y redirigir:contentReference[oaicite:19]{index=19}:contentReference[oaicite:20]{index=20}
            req.session.userLogueado = {
                id: user.id,
                usuario: user.usuario,
                email: user.email,
                fotoPerfil: user.fotoPerfil
            };
            return res.redirect('/users/profile');
        })
        .catch(err => {
            console.error(err);
            return res.status(500).render('error', { message: 'Error al registrar', error: err });
        });
    },
    
    // GET /users/logout
    logout: function(req, res){
        // destruir session y limpiar cookie:contentReference[oaicite:21]{index=21}:contentReference[oaicite:22]{index=22}
        req.session.destroy(() => {
            res.clearCookie('usuario');
            return res.redirect("/");
        });
    }
};

module.exports = usersController;
