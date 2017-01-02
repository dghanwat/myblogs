var PORT = Number(process.env.PORT || 5000);

var compression = require('compression');
var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/www');
app.set('view engine', 'html');

app.use(compression());

app.use(express.static(__dirname + '/www'));
app.use(require('prerender-node'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/www/index.html');
});
app.get('/home', function (req, res) {
  res.sendFile(__dirname + '/www/index.html');
});
app.get('/blog/*', function (req, res) {
  //res.sendFile(__dirname + '/www/index.html');

  var urlFileName = req.url.substring(req.url.lastIndexOf("/")+1,req.url.length);
  var indexData = JSON.parse(fs.readFileSync('./www/js/data/index.json', 'utf8'));
  var arrayFound = indexData.filter(function(item) {
    	return item.fileName == urlFileName;
	});
  if(arrayFound.length == 0){
	   res.render('index', {
	    ogUrl: "https://outofmymemory.herokuapp.com/home",
	    ogTitle: "OutOfMyMemory",
	    ogDescription:"We are a respected blog with niche content. The articles provide useful best practices, tutorials, articles, code samples and snippets on latest technologies such as Core Java, AngularJS , Design Patterns, Ionic Framework, Scala etc."
	  });
  } else {
 	res.render('index', {
	    ogUrl: "https://outofmymemory.herokuapp.com"+req.url,
	    ogTitle: "OutOfMyMemory:"+arrayFound[0].title,
	    ogDescription:arrayFound[0].shortText
	  });
  }
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('You application listening at http://%s:%s', host, port)
});