// factory for a new car option
exports.carOption = function () {
  return {
    name: "",
    description: "",
    price: 0,
    isSelected: false
  };
};

// factory for a grouping of car options
exports.carOptionGroup = function() {
  return {
    name: "",
    description: "",
    options: []
  };
};
