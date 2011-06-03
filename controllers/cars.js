var mu = require('../mu_temp/mu');

exports.register = function (app, db, models) {
  // Gets the choices for a specific car
  app.get('/cars/:index', function (req, res) {
    var index = req.params.index;
    if (index !== undefined && models.cars[index] !== undefined) {
      res.send(models.cars[index]);
      return;
    }
    res.send('Car not found');
  });
  // Enumerates the cars
  app.get('/cars', function (req, res) {
    var keys = Object.keys(models.cars);
    var result = keys.map(function(key) {
      return {
        index: key,
        name: models.cars[key].name,
        description: models.cars[key].description
      };
    });

    mu.r('cars', { cars: result }, !!req.query.t, res);
  });
};
