const express = require('express');
const burger = require('../models/burger');

module.exports = function (app) {


    app.get('/', function (req, res) {
        burger.all(function(err, data) {
        res.render('index', { burgers: data});
        });

    });


    app.post('/', function (req, res) {

        burger.create("burger_name", req.body.burgobj, function(err, result) {
            res.redirect("/");
        })
    });
    //
    //
    // app.delete('/:id', function(req, res) {
    //     burger.devour(function(err, data) {
    //     })
    // })
};