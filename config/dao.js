const connection = require("./connection");

const dao = {


    selectAll: function (columnOne, columnTwo, table, callback) {
        const queryString = "SELECT ??, ?? FROM ??";
        connection.query(queryString, [columnOne, columnTwo, table], function (err, result) {

            callback(err, result);
        })
    },

    create: function (table, columnOne, columnTwo, columnThree, valOne, valTwo, valThree, callback) {
        const queryString = "INSERT INTO ?? (??, ??, ?? ) VALUES (??, ??, ??)";
        connection.query(queryString, [table, columnOne, columnTwo, columnThree, valOne, valTwo, valThree], function (err, result) {

            callback(err, result);
        });
    }
};

module.exports = dao;