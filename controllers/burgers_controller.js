const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');



//select all
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

//insert one
router.post('/burger', (req, res) => {
    burger.insertOne(['burger_name'],
    [req.body.burger_name], 
    function(result) {
        res.status(200).end();
    })
});
  

//update
router.put('/burger/:id'), function(req, res) {
    var condition = req.params.id;
    burger.updateOne(
        {devoured: true},
        condition, 
        function(result) {
            res.status(200).end();
        })
};

module.exports = router;