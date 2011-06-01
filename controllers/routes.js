var testController = require('./test.js');
var carsController = require('./cars.js');

exports.register = function (app, db, models) {
  testController.register(app, db);
  carsController.register(app, db, models);
};
