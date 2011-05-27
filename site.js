var http = require('http');
var express = require('express');

var app = express.createServer();

var site = {
  configure: function () {
    this.use(express.bodyParser());
    this.use(express.cookieParser());
//    this.use(this.router);
    this.use(express.static(__dirname + '/_static'));
  }
};

app.configure(site.configure);
//site.registerRoutes(app);

app.listen(3000);