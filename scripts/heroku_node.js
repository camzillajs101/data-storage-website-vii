var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.use('/static',express.static('public'));
app.use('/view',express.static('static/views'));
app.use('/image',express.static('images'));
app.use('/script',express.static('scripts'));
app.use('/style',express.static('styles'));
app.use('/font',express.static('fonts'));
app.use('/root',express.static('/'));

app.get('/', function (req,res){
  res.render('static/login.html', function(err, html) {
    res.send(html);
  });
});

app.listen(app.get('port'), function(){
  console.log(`C-Mail listening on port ${app.get('port')}!`);
});
