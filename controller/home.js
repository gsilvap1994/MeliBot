const meli = require('mercadolibre');

var meliObject = new meli.Meli(1283046950684731, 'ib2T7nrbarDfkbiXbSVfurVUxuYmflaa');

module.exports = function(app) {
  app.get('/', function(req, res) {
    var _url = meliObject.getAuthURL('https://meli-bot.herokuapp.com/login');
    res.render('index', { url: _url });
  });

  app.get('/chat', function(req, res) {
    var nome;
    meliObject.get('/users/me', function(err, user) {
      nome = user.first_name+' '+user.last_name;
    });
    res.render('chat', { nome: nome });
  });

  app.get('/login', function(req,res) {
    meliObject.authorize(req.query.code, 'https://meli-bot.herokuapp.com/login', function(err, auth) {
      console.log(err, auth);
      res.redirect('/chat');
    });
  });
}
