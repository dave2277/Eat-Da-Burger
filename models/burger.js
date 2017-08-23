var dao = require('../config/dao');

var callback = function (err, data) {
    console.log(data);
};

var data = dao.selectAll("id", "burger_name", "devoured", "burgers", callback);


// dao.insertOne("burgers", "burger_name", "devoured", "date");
