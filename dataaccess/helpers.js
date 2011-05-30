exports.bind = function (data) {
  data._stripId = function() {
    delete this._id;
    return this;
  }
}
