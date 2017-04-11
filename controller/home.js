const meli = require('mercadolibre');

var meliObject = new meli.Meli(5952487414944712, 'LmvOIm524KXpPkuHOXWWKyhr3Tt56C2J');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/chat', function(req, res) {
    res.render('chat');
  });

  app.get('/login', function(req, res){
    res.redirect(meliObject.getAuthURL());
  });
}
