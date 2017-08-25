const express = require('express');
const burger = require('../models/burger');
var thingy;


module.exports = function (app) {


    app.get('/', function (req, res) {
        thingy = burger.all(function(data) {

        });
        console.log(thingy);
        res.render('index', { burgers: thingy});
    });


    // app.post('/', function (req, res) {
    //
    //     console.log(req.body);
    //     res.redirect("/");
    //
    // });
};