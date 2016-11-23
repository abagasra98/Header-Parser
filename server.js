var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/', function(req, res) {
  res.send("Hello World! Please use the /api/whoami endpoint to test the app");
})

app.get('/api/whoami', function(req, res) {
  var agent = req.get('user-agent');
  agent = agent.substring(agent.indexOf('(') + 1, agent.indexOf(')'));
  res.json({ipaddress: req.ip, language: req.get('accept-language'), software: agent});
})

app.listen(app.get('port'), function() {
  console.log("Header parser app listening on port " + app.get('port'));
})
