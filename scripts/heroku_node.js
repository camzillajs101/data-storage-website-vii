var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req,res){
  res.send('Hello World!');
})

app.listen(3000, function(){
  console.log('C-Mail listening on port 3000!')
})
