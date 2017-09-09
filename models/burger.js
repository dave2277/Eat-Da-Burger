const dao = require('../config/dao');
var values = '';
var cols = '';

var burger = {

    all: function (cb) {
        dao.selectAll("id", "burger_name", "devoured", "burgers", function (err, result) {
            cb(err, result);
        })
    },

    create: function (cols, values, cb) {
        dao.insertOne("burgers", cols, values, function (err, result) {
            if (err) {
                throw err;
            }
            cb(err, result);
        })
    },

    devour: function (id, cb) {
        dao.updateOne(id, function (err, result){
            if (err) {
                throw err;
            }
            cb(err, result);
        })
    }

};

module.exports = burger;