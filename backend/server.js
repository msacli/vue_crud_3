var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors'),
	bodyParser = require('body-parser');
var config = require('./config/DB');
var app = express();
var itemRoutes =  require('./expressRoutes/itemRoutes');

mongoose.connect(config.db, (err)=>{
	(err)?(console.log(err)):(console.log('con to mongodb'))
});

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use('/items', itemRoutes);

app.listen(2000, ()=>{
	console.log('json app list on port 2000')
});


