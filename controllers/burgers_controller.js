var express = require('express');
var router = express.Router();

var burger = requier('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        res.render('index', hbsObject);
    });
});