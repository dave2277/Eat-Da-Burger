const dao = require('../config/dao');

const callback = function (err, data) {
    console.log(data);
};

var burger = {

    all: function (cb) {
        dao.selectAll("id", "burger_name", "devoured", "burgers", callback);


// dao.insertOne("burgers", "burger_name", "devoured", "date");
    }
};

module.exports = burger;