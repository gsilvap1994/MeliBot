const meli = require('mercadolibre');

var meliObject = new meli.Meli(1283046950684731, 'ib2T7nrbarDfkbiXbSVfurVUxuYmflaa');

module.exports = function(app) {
  app.get('/', function(req, res) {
    var _url = meliObject.getAuthURL('https://meli-bot.herokuapp.com/login');
    res.render('index', { url: _url });
  });

  app.get('/chat', function(req, res) {
    meliObject.get('/users/me', function(err, user) {
      console.log(err, user);
      var nome = user.first_name;
      res.render('chat', { nome: nome, token: user.access_token });
    });

  });

  app.post('/api/user', function(req, res) {
    meliObject.get('/users/me', function(err, user) {
      res.json(user);
    });
  });

  app.get('/login', function(req,res) {
    if(!req.query.code){
      return res.redirect('/');
    }

    meliObject.authorize(req.query.code, 'https://meli-bot.herokuapp.com/login', function(err, auth) {
      console.log(err, auth);
      res.redirect('/chat');
    });
  });
}
