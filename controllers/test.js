exports.register = function (app, db) {
  // Returns the number of documents in the test collection
  app.get('/test/count', function (req, res) {
    db.test.count(function (err, count) {
      res.send(count.toString());
    });
  });
  // Inserts stuff into the test collection and returns the document
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
