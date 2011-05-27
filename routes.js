exports.register = function (app, db) {
  app.get('/car/:carID', function (req, res) {
    res.send('car ' + req.params.carID);
  });
  app.get('/test/count', function (req, res) {
    db.test.count(function (err, count) {
      res.send(count.toString());
    });
  });
  app.get('/test/insert', function (req, res) {
    var testobject = { foo: 'bar' };
    db.test.insert(testobject, function (err, records) {
      if (err) {
        res.send(err);
      } else {
        res.send(records);
      }
    });
  });
}
