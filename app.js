'use strict';
var express = require('express');
var app = express();
var volleyball = require('volleyball');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var models = require('./models');
var routes = require('./routes');

app.use(volleyball);
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static("public"))


// nunjucks setup
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

app.use('/', routes)

models.db.sync({force: true})
    .then(function(){
        app.listen(1337, function() {
        console.log('listening on port 1337');
    });
    })
