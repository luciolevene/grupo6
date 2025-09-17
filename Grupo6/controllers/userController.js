const userController = {
    register: function (req, res) {
      res.render('register');
    },
    login: function (req, res) {
      res.render('login');
    },
    profile: function (req, res) {
      res.render('profile');
    }
  };
  
  module.exports = userController;
  