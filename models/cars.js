var co = require('./caroptions');

exports.canyonero = {
  name: 'Canyonero',
  description: 'Go anywhere',
  options: [
    co.carOptionGroup(
      'colors',
      'Colors',
      'Car Colors',
      [
        co.carOption('black', 'Black', 'Black', 0, false),
        co.carOption('white', 'White', 'White', 0, false),
        co.carOption('silver', 'Silver', 'Silver', 0, false),
        co.carOption('yellow', 'Yellow', 'Special Yellow', 500, false)
      ]
    ),
    co.carOption('navi', 'Navigation', 'Never get lost!', 1500, false)
  ]
};

exports.t9000 = {
  name: 'T9000',
  description: 'it\'s metal',
  options: [
    co.carOption('navi', 'Navigation', 'Never get lost!', 1500, false),
    co.carOption('sportpkg', 'Sport Package', 'Makes it easier to catch John Conner', 3000, false)
  ]
};
