var express = require('express');
var mu = require('./mu_temp/mu');
var routes = require('./controllers/routes');
var db = require('./dataaccess/database');
var models = require('./models/models');

mu.templateRoot = './templates';
mu.templateExtension ='mustache';
mu.r = function(filename, context, res) {
  mu.render(filename, context, { cached: true }, function (err, output) {
    if (err) {
      throw err;
    }

    output.addListener('data', function (c) { res.write(c); })
          .addListener('end', function() { res.end(); });
  });
};

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
