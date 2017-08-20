var express = require('express');
var burgers = require('../models/burger');

module.exports = function (app) {


    app.get('/', function (req, res) {
        res.render('index');

    });


    app.post('/', function (req, res) {

        console.log(req.body);

    });
};