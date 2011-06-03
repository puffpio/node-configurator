var fs = require('fs');
var path = require('path');
var mu = require('./mu_temp/mu');

exports = module.exports = mu;

mu.templateRoot = './templates';
mu.templateExtension ='mustache';

// render!
mu.r = function(filename, context, isClientRender, res) {
  if (isClientRender) {
    mu.clientRender(filename + '.partial', context, res);
  } else {
    mu.serverRender(filename + '.html', context, res);
  }
};

// render template and spit it out
mu.serverRender = function(filename, context, res) {
  mu.render(filename, context, { cached: true }, function (err, output) {
    if (err) {
      throw err;
    }

    output.addListener('data', function (c) { res.write(c); })
          .addListener('end', function() { res.end(); });
  });
};

// write context and partial template to JS, let client deal with it
mu.clientRender = function(filename, context, res) {
  fs.readFile(
    path.join(mu.templateRoot, filename + '.' + mu.templateExtension),
    function(err, data) {
      if (err) {
        throw err;
      }

      var result = {
        context: JSON.stringify(context),
        template: JSON.stringify(data.toString('utf8'))
      };

      mu.serverRender('clientside.html', result, res);
    }
  );
};
