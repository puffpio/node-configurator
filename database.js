(function () {
  var mongo = require('mongoskin');
  var db = mongo.db('localhost:27017/configurator');

  // collection holding all the car models and their configuration choices
  db.bind('cars');

  // collection holding all the users configured cars
  db.bind('configurations');

  return db;
})();
