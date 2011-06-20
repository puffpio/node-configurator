var mongo = require('mongoskin');
var db = mongo.db('localhost:27017/configurator');
var h = require('./helpers');

exports = module.exports = db;

// test collection..thar be dragons!
db.bind('test');

// collection holding all the car configurations
db.bind('cars', {
  saveCar : function(car, callback) {
    this.insert(car, function(err, records) {
      if (err) {
        callback(err);
      } else {
        callback(null, records[0]._id);
      }
    });
  }
});
