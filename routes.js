var testController = require('./controllers/test.js');

exports.register = function (app, db) {
  app.get('/car/:carID', function (req, res) {
    res.send('car ' + req.params.carID);
  });

  testController.register(app, db);
};
