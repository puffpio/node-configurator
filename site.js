var express = require('express');
var mu = require('./mu_temp/mu');
var routes = require('./controllers/routes');
var db = require('./dataaccess/database');
var models = require('./models/models');

mu.templateRoot = './templates';

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
routes.register(app, db, models);

app.listen(3000);
