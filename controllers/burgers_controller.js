const express = require('express');
const burger = require('../models/burger');


module.exports = function (app) {


    app.get('/', function (req, res) {
        burger.all(function(err, data) {
        res.render('index', { burgers: data});
        });

    });


    app.post('/', function (req, res) {
        burger.create(function(err, data) {
        console.log(req.body.burger_name);
        res.redirect("/");
        })

    });


    app.devour('/:id', function(req, res) {
        burger.delete(function(err, data) {
        })
    })
};