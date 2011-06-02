var mu = require('../mu_temp/mu');

exports.register = function (app, db) {
  // Returns the number of documents in the test collection
  app.get('/test/count', function (req, res) {
    db.test.count(function (err, count) {
      res.send(count.toString());
    });
  });

  // Inserts stuff into the test collection and returns the document
  app.get('/test/insert', function (req, res) {
    var testobject = {
      foo: 'bar',
      func: function() { return true; }
    };

    db.test.insert(testobject, function (err, records) {
      if (err) {
        res.send(err);
      } else {
        res.send(records);
      }
    });
  });

  // test endpoint for mu
  app.get('/test/mu', function(req, res) {
    mu.r('test.html', {}, { cached: true }, res);
  });
};
