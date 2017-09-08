const connection = require("./connection");

const dao = {


    selectAll: function (columnOne, columnTwo, table, callback) {
        const queryString = "SELECT ??, ?? FROM ??";
        connection.query(queryString, [columnOne, columnTwo, table], function (err, result) {

            callback(err, result);
        });
    },

    insertOne: function (table, cols, values, callback) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, values], function(err, result) {
            if (err) {
                throw err;
            }
            callback(err, result);
        });
    },

    updateOne: function (table, cols, values, id, callback) {
        const queryString = "UPDATE ?? SET ?? = ?? WHERE id = ??";
        connection.query(queryString, [table, cols, values, id], function(err, result) {
            if (err) {
                throw err;
            }
            callback(err, result);
        });
    }

};

module.exports = dao;