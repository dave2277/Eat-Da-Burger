const dao = require('../config/dao');
var values = '';
var cols = '';

var burger = {

    all: function (cb) {
        dao.selectAll("burger_name", "devoured", "burgers", function (err, result) {
            cb(err, result);
        })
    },

    create: function (cols, values, cb) {
        dao.create("burgers", "burger_name", values, function (result) {
            console.log(cb);
            cb(result);
        })
    }
};

module.exports = burger;