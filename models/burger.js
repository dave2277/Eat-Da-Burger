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
        dao.create("burgers", cols, values, function (err, result) {
            console.log(cb);
            if (err) {
                throw err;
            }
            cb(err, result);
        })
    }
};

module.exports = burger;