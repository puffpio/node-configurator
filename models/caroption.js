// factory for a new car option
exports.carOption = function (name, description, price, isSelected) {
  return {
    name: name === undefined ? '' : name,
    description: description === undefined ? '' : description,
    price: price === undefined ? 0 : price,
    isSelected: isSelected === undefined ? false : isSelected
  };
};

// factory for a grouping of car options
exports.carOptionGroup = function(name, description, options) {
  return {
    name: name === undefined ? '' : name,
    description: description === undefined ? '' : description,
    options: options === undefined ? [] : options
  };
};
