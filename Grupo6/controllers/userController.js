const bcrypt = require('bcryptjs');
const db = require('../database/models');

const usersController = {
  login: function (req, res) {
    if (req.session && req.session.userLogueado) {
      return res.redirect('/users/profile');
    }
    return res.render('login');
  },

 
processLogin: function (req, res) {
  db.User.findOne({
    where: { email: req.body.email }
  })
  .then(function (user) {
    if (user != undefined) {
      let passDb = user.password;
      let check = bcrypt.compareSync(req.body.password, passDb);

      if (check == true || passDb == req.body.password) {
        req.session.userLogueado = {
          id: user.id,
          usuario: user.usuario,
          email: user.email,
          fotoPerfil: user.fotoPerfil
        };

        if (req.body.remember != undefined) {
          res.cookie('usuario', req.session.userLogueado, { maxAge: 1000 * 60 * 60 });
        }

        return res.redirect('/users/profile');
      } else {
        return res.render('login', { error: 'Contraseña incorrecta' });
      }
    } else {
      return res.render('login', { error: 'Email no registrado' });
    }
  })
  .catch(function (error) {
    console.error(error);
    return res.status(500).render('error', { message: 'Error al iniciar sesión', error: error });
  });
},

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
        return res.render('profile', { user: usuario, productos: usuario.productos });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).render('error', { message: 'Error al cargar el perfil', error: err });
      });
  },

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

  register: function (req, res) {
    if (req.session && req.session.userLogueado) {
      return res.redirect('/users/profile');
    }
    return res.render('register');
  },

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
          fotoPerfil: req.body.fotoPerfil 
        });
      })
      .then(function (user) {
        if (!user) return;

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

  
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('usuario')
        res.redirect("/")
    }
};

module.exports = usersController;
