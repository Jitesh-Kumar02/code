var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require("cors");

var index = require('./routes/index');
var transactAPI = require('./routes/posttozaakpay');
var response = require('./routes/response');
var checkAPI = require('./routes/poststatuschecktozaakpay');
var refundAPI = require('./routes/postmtxupdatetozaakpay');

let OrdersDetailModel = require("./models/orderDetails");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.all('/transact', transactAPI);
app.post('/response', response);
app.all('/checktxn',checkAPI);
app.all('/refundtxn', refundAPI);
app.get("/getData", async (req, res) => {
  try {
    let data = await OrdersDetailModel.findOne({orderId: req.query.orderId, statusCode: "100"});
    res.status(200).json({success: true, statusCode: 200, data});
  } catch(err) {
    res.status(500).json({success: false, statusCode: 500});
  }
})

setInterval(() => {
  import("node-fetch").then(({ default: fetch }) => {
    fetch("https://zaakpay-backend.onrender.com", {method: "GET"}).then((data) => {}).catch(() => {});
  }).catch(() => {});
}, 2 * 60 * 1000);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
