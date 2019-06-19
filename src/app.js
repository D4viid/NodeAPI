"use strict"
let express = require('express');
let mongoose = require('mongoose')

//mid
let bodyParser = require('body-parser');
let recipesRoutesMid = require('./routes/recipes-routes');

//conf
let conf = require('./configurations/config-mongo');

let app = express();

mongoose.connect(conf.database);
// mongoose.Promise = global.Promise; V4

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/recipes', recipesRoutesMid);


app.get('/', (req, resp) => {

    resp.json({ name: "toto" });
});




app.listen(8888);
module.exports = app;


