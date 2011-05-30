var co = require('./caroption.js');

exports.CAR1 = {
  colorOptionGroup: co.carOptionGroup(
    'Colors',
    'Car Colors',
    [
      co.carOption('Black', 'Black', 0, false),
      co.carOption('White', 'White', 0, false),
      co.carOption('Silver', 'Silver', 0, false),
      co.carOption('Yellow', 'Special Yellow', 500, false)
    ]
  ),
  navigation: co.carOption('Navigation', 'Never get lost!', 1500, false)
};
