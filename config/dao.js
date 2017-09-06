const connection = require("./connection");

const dao = {


    selectAll: function (columnOne, columnTwo, table, callback) {
        const queryString = "SELECT ??, ?? FROM ??";
        connection.query(queryString, [columnOne, columnTwo, table], function (err, result) {

            callback(err, result);
        });
    },

    create: function (table, cols, values, callback) {
        const queryString = "INSERT INTO" + table + "(" + cols + ")  VALUES (??)";
        connection.query(queryString, [values], function(err, result) {
            console.log(callback);
            callback(err, result);
        });
    }
};

module.exports = dao;