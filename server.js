var express=require('express');
var app = express();
var headerGrab = require('./headerGrab.js');

app.use(express.static("public"));
app.get("/", function(req,res){
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/whoami", function(req,res){
  res.send(headerGrab(req.headers));
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
