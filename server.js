const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;

// use css style
app.use(express.static(__dirname + '/public'));

// enable the passing of JSON
app.use(bodyParser.urlencoded({  extended: false}));

app.set('view engine', 'ejs');

// home route
app.get('/', function(req, res){
	res.render('pages/index', {title: 'Gym Stats'}); //response
});

// used for posting data to the server
app.post('/message', function(req, res){

	const message = req.body.message;
	res.send('message resp is: ' + message);
});

app.listen(port, () => {
    console.log("Sever is listening on port ", port);
})
