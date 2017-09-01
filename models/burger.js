const dao = require('../config/dao');


var burger = {

    all: function (cb) {
        dao.selectAll("burger_name", "devoured", "burgers", function (result) {
            cb(result);
        })
    },

    create: function (cb) {
        dao.create("burgers", "burger_name", "devoured", CURRENT_DATE, function (result) {
            cb(result);
        })
    }
};

module.exports = burger;