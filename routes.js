exports.register = function (app, db) {
  app.get('/car/:carID', function (req, res) {
    res.send('car ' + req.params.carID);
  });
  app.get('/testcount', function (req, res) {
    db.test.count(function (err, count) {
      res.send(count.toString());
    });
  });
}
