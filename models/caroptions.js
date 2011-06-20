// factory for a new car option
exports.carOption = function (id, name, description, price, isSelected) {
  return {
    id : id === undefined ? '' : id,
    name: name === undefined ? '' : name,
    description: description === undefined ? '' : description,
    price: price === undefined ? 0 : price,
    isSelected: isSelected === undefined ? false : isSelected,
    isCarOption: true,
    setSelected: function() {
      this.isSelected = true;
    }
  };
};

// factory for a grouping of car options
exports.carOptionGroup = function(id, name, description, options) {
  for (var i = 0; i < options.length; i++) {
    options[i]['groupId'] = id;
  }

  return {
    id: id === undefined ? '' : id,
    name: name === undefined ? '' : name,
    description: description === undefined ? '' : description,
    groupOptions: options === undefined ? [] : options,
    isCarOptionGroup: true,
    setSelected: function(id) {
      for (var i = 0; i < this.groupOptions.length; i++) {
        this.groupOptions[i].isSelected = this.groupOptions[i].id == id;
      }
    }
  };
};
