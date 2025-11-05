// controllers/userController.js
const bcrypt = require('bcryptjs');
const db = require('../database/models');

const usersController = {
  // GET /users/login
  login: function (req, res) {
    if (req.session && req.session.userLogueado) {
      return res.redirect('/users/profile');
    }
    return res.render('login');
  },

  // POST /users/processLogin
  processLogin: function (req, res) {
    db.User.findOne({ where: { email: req.body.email } })
      .then(function (user) {
        if (!user) {
          return res.render('login', { error: 'Email no registrado' });
        }

        const passDb = user.password;
        const ok = bcrypt.compareSync(req.body.password, passDb) || passDb === req.body.password;

        if (!ok) {
          return res.render('login', { error: 'Contraseña incorrecta' });
        }

        // guardar en sesión lo mínimo
        req.session.userLogueado = {
          id: user.id,
          usuario: user.usuario,
          email: user.email,
          fotoPerfil: user.fotoPerfil
        };

        // recordarme (cookie)
        if (req.body.remember || req.body.recordarme) {
          res.cookie('usuario', req.session.userLogueado, { maxAge: 1000 * 60 * 5 });
        }

        return res.redirect('/users/profile');
      })
      .catch(err => {
        console.error(err);
        return res.status(500).render('error', { message: 'Error al iniciar sesión', error: err });
      });
  },

  // GET /users/profile
  profile: function (req, res) {
    if (!req.session || !req.session.userLogueado) {
      return res.redirect('/users/login');
    }

    const userId = req.session.userLogueado.id;

    db.User.findByPk(userId, {
      include: [
        {
          association: 'productos',
          include: [{ association: 'comentarios' }]
        },
        { association: 'comentarios' }
      ]
    })
      .then(function (usuario) {
        if (!usuario) {
          return res.redirect('/users/login');
        }
        // tu profile.ejs usa "user" y "productos"
        return res.render('profile', { user: usuario, productos: usuario.productos });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).render('error', { message: 'Error al cargar el perfil', error: err });
      });
  },

  // GET /users/profile/:id (opcional)
  profilePorId: function (req, res) {
    const userId = req.params.id;

    db.User.findByPk(userId, {
      include: [
        {
          association: 'productos',
          include: [{ association: 'comentarios' }]
        },
        { association: 'comentarios' }
      ]
    })
      .then(function (usuario) {
        if (!usuario) {
          return res.send('Usuario no encontrado');
        }
        return res.render('profile', { user: usuario, productos: usuario.productos });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).render('error', { message: 'Error al cargar el perfil', error: err });
      });
  },

  // GET /users/register
  register: function (req, res) {
    if (req.session && req.session.userLogueado) {
      return res.redirect('/users/profile');
    }
    return res.render('register');
  },

  // POST /users/processRegister
  processRegister: function (req, res) {
    const password = req.body.password;
    if (!password || password.length < 3) {
      return res.render('register', { error: 'La contraseña debe tener al menos 3 caracteres.' });
    }

    const email = req.body.email;

    db.User.findOne({ where: { email } })
      .then(function (userInDB) {
        if (userInDB) {
          return res.render('register', { error: 'El email ya está registrado.' });
        }

        const passHash = bcrypt.hashSync(password, 10);

        return db.User.create({
          usuario: req.body.usuario,
          email: req.body.email,
          password: passHash,
          fotoPerfil: req.body.fotoPerfil || null
        });
      })
      .then(function (user) {
        if (!user) return; // ya respondimos por email duplicado

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
  logout: function (req, res) {
    if (req.session) {
      req.session.destroy(() => {
        res.clearCookie('usuario');
        return res.redirect('/');
      });
    } else {
      res.clearCookie('usuario');
      return res.redirect('/');
    }
  }
};

module.exports = usersController;
