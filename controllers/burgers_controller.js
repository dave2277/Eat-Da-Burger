const express = require('express');
const burger = require('../models/burger');
const connection = require("./../config/connection");

const router = express.Router();

module.exports = function (app) {


    router.get('/', function (req, res) {
        burger.all(function(err, data) {
        console.log(data);
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

    router.put('/burgers/:id', function(req, res) {
        burger.devour(req.params.id, function(err, data) {
            if (err) {
                throw err;
            }
            res.redirect('/');
        })
    });

    module.exports = router;
};