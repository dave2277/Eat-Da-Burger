const dao = require('../config/dao');



var burger = {

    all: function (cb) {
        dao.selectAll("id", "burger_name", "devoured", "burgers", function (err, data) {

        });


// dao.insertOne("burgers", "burger_name", "devoured", "date");
    }
};

module.exports = burger;