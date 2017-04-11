const meli = require('mercadolibre');

var meliObject = new meli.Meli(1283046950684731, 'ib2T7nrbarDfkbiXbSVfurVUxuYmflaa');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/chat', function(req, res) {
    res.render('chat');
  });

  app.get('/login', function(req, res){
    res.redirect(meliObject.getAuthURL('https://meli-bot.herokuapp.com/chat'));
  });

  app.get('/chat', function(req,res) {
    meliObject.authorize(req.query.code, 'https://meli-bot.herokuapp.com/chat', function(err, auth) {
      meliObject.refreshAccessToken(function (err, auth){
        meliObject.get('/users/me', function (err, user) {
          console.log(user);
        });
      });
    });
  });
}
