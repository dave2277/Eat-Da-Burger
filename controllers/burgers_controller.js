const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

module.exports = function (app) {


    router.get('/', function (req, res) {
        burger.all(function(err, data) {
        res.render('index', { burgers: data});
        });

    });


    router.post('/', function (req, res) {
        burger.create("burger_name", req.body.burgobj, function(err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/');
        })

    });

    router.put('/:id', function(req, res) {
        burger.devour("devoured", true, req.params.id, function(err, data) {
            console.log(req.params.id);
            if (err) {
                throw err;
            }
            res.redirect('/');
        })
    });

    module.exports = router;
};