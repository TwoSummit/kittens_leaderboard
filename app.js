// Require
const express = require('express'),
      expressHandlebars = require('express-handlebars'),
      fs = require('fs'),
      bodyParser = require('body-parser')
      helpers = require('handlebars-helpers'),
      path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// Template Engine
const template_engine = 'hbs';

if (template_engine == 'hbs') {
    var handlebarHelpers = helpers.comparison();
    var hbs = expressHandlebars.create();
    app.engine('hbs', hbs.engine);
}

// Set details of app
app.set('template_engine', template_engine);
app.set('port', port);
app.set('views', __dirname + '\\views');
app.set('view engine', template_engine);
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

// routes
var routes = require('./routes');

// Route handler for POST /kittens
app.post('/api/kittens', routes.kittensPost);

// route handler for GET /kittens
app.get('/kittens', routes.kittensIndex);

// route handler for GET /api/kittens
app.get('/api/kittens', routes.kittensGet);

// route handler for GET /
app.get('/', function(req, res) {
  var data = '<h1>hello world</h1>';
  res.send(data);
});

// can specify port and address/hostname
// see: http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback
var server = app.listen(port, '127.0.0.1', function() {
  var host = server.address();
  console.log('server started on %s:%s', host.address, host.port);
});


