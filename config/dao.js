var connection = require("./connection");

var dao = {


    selectAll: function (columnOne, columnTwo, columnThree, table, callback) {
        var queryString = "SELECT ??, ??, ?? FROM ??";
        connection.query(queryString, [columnOne, columnTwo, columnThree, table], callback)
        }

    // insertOne: function (table, columnOne, columnTwo, columnThree, valOne, valTwo, valThree) {
    //     var queryString = "INSERT INTO ?? (??, ??, ?? ) VALUES (??, ??, ??)";
    //     connection.query(queryString, [table, columnOne, columnTwo, columnThree, valOne, valTwo, valThree], function (err, result) {
    //         console.log(result);
    //
    //     });
    // }
};

module.exports = dao;