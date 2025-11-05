var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'progra2-grupo6',
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  if (!req.session.userLogueado && req.cookies.usuario) {
    req.session.userLogueado = req.cookies.usuario; 
  }
  res.locals.user = req.session.userLogueado || null; 
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// 404
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
