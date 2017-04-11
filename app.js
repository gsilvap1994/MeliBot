var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
app.engine('html', nunjucks.render);
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

require('./controller/home')(app);


app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});
