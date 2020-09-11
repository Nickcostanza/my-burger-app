var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
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
    
router.put('/burger/:id'), function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateAll(
        {devoured: true},
        condition, 
        function(result) {
            res.status(200).end();
        })
};

module.exports = router;