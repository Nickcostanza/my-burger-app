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

router.post("/burger", function(req, res) {
    burger.insertOne(['burger_name'],
    [req.body.burger_name], 
    function(result) {
        res.status(200).end();
    })
});
     