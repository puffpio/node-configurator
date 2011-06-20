var mu = require('../mu_temp/mu');

exports.register = function (app, db, models) {
  // Gets the choices for a specific car
  app.get('/cars/:index', function (req, res) {
    var index = req.params.index;
    if (index !== undefined && models.cars[index] !== undefined) {
      mu.r('model', models.cars[index], !!req.query.t, res);
      return;
    }
    res.send('Car not found');
  });
  // Gets a specific car configuration
  app.get('/cars/:index/:id', function (req, res) {
    if (req.params.index !== undefined &&
        models.cars[req.params.index] !== undefined &&
        req.params.id !== undefined) {
      db.cars.findById(req.params.id, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          mu.r('model', result, !!req.query.t, res);
        }
      });
      return;
    }
    res.send('Car not found');
  });
  // Saves a car configuration
  app.post('/cars/:index', function (req, res) {
    var index = req.params.index;
    if (index !== undefined && models.cars[index] !== undefined) {
      var car = models.carinstances[index]();
      
      // tranform car options into an associative array for direct lookup
      var options = {};
      for (var i = 0; i < car.options.length; i++) {
        options[car.options[i].id] = car.options[i];
      }

      for (var key in req.body) {
        if (options[key] !== undefined) {
          options[key].setSelected(req.body[key]);
        }
      }

      db.cars.saveCar(car, function(err, id) {
        if (err) {
          res.send(err);
        } else {
          res.redirect('/cars/' + index + '/' + id);
        }
      });
    }
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
