const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const https = require('https');
const save = require('../database/index.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  var request = https.request(
    {
      host: 'api.github.com',
      path: '/users/' + req.body.term + '/repos',
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    },
    function(response){
      var body = '';
      response.on("data", function(chunk){
        body += chunk.toString('utf8');
      });
      response.on("end", function(){
        console.log(JSON.parse(body)[0]);
      });
    }
  );
  request.end();
});

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

