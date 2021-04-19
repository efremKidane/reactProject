var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;


const client = new MongoClient('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.3h5qi.mongodb.net?retryWrites=true&w=majority', { useUnifiedTopology: true });
let connection;

var usersRouter = require('./routes/users');
// const productsRouter = require('./routes/products');
const lecturesRouter = require('./routes/products');
var authRouter = require('./routes/auth');

const fs = require('fs');
const { ObjectID } = require('mongodb');

const authMiddleware = require('./middlewares/authorization');

var app = express();

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', (req, res, next) => {
  if (!connection) { // connect to database
    console.log('connecting');
    client.connect(function (err) {
      connection = client.db('product-app');
      req.db = connection;
      next();
    })
  } else { // 
    req.db = connection;
    next();
  }
});

app.use('/auth', authRouter); 
app.use('/products', lecturesRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.listen(process.env.PORT || 2000,()=>{
  console.log('listen in port 2000');
});