var page = require('webpage').create();
var system = require('system');
page.viewportSize = {
  width: 800,
  height: 600,
};

var url = system.args[1];

page.onLoadFinished = function() {  
  setTimeout(function() {
    page.render('ogp-image.png');
    phantom.exit();
  }, 2000);
};

page.open(url, function() {
});

