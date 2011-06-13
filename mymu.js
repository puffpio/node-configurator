var fs = require('fs');
var path = require('path');
var mu = require('./mu_temp/mu');

exports = module.exports = mu;

mu.templateRoot = './templates';
mu.templateExtension ='mustache';

// render!
mu.r = function(filename, context, isServerRender, res) {
  if (isServerRender) {
    mu.serverRender(filename + '.serverside.html', context, res);
  } else {
    mu.clientRender(filename, context, res);
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
    path.join(
      mu.templateRoot,
      filename + '.partial.html.' + mu.templateExtension
    ),
    function(err, data) {
      if (err) {
        throw err;
      }

      var result = {
        context: JSON.stringify(context),
        template: JSON.stringify(data.toString('utf8'))
      };

      mu.serverRender(filename + '.clientside.html', result, res);
    }
  );
};
