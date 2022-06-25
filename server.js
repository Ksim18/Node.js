var express = require('express'),
    morgan = require('morgan');

var port = 3000,
    hostname = 'localhost';

var app = express();

app.use(morgan('dev'));

var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaderships', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
  console.log(Server running at http://${hostname}:${port});
});
