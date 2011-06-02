var testController = require('./test');
var carsController = require('./cars');

exports.register = function (app, db, models) {
  testController.register(app, db);
  carsController.register(app, db, models);
};
