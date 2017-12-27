var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/burgers');
});

router.get('/burgers', (req, res) => {
    burger.selectAll((data) => {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne(['burger_name', 'devoured'], [req.body.name, req.body.devoured], (data) => {
        // send back the ID of the new burger
        res.send(data);
    });
});

module.exports = router;