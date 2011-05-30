var express = require('express');
var routes = require('./controllers/routes.js');
var db = require('./dataaccess/database.js');
var app = express.createServer();

var site = {
  configure: function () {
    this.use(express.bodyParser());
    this.use(express.cookieParser());
    this.use(this.router);
    this.use(express.static(__dirname + '/_static'));
  }
};

app.configure(site.configure);
routes.register(app, db);

app.listen(3000);
