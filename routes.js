exports.register = function (app) {
  app.get('/car/:carID', function (req, res) {
    res.send('car ' + req.params.carID);
  });
}
