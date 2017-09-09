const connection = require("./connection");

const dao = {


    selectAll: function (columnOne, columnTwo, columnThree, table, callback) {
        const queryString = "SELECT ??, ??, ?? FROM ??";
        connection.query(queryString, [columnOne, columnTwo, columnThree, table], function (err, result) {

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

    updateOne: function (id, callback) {
        const queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function(err, result) {
            if (err) {
                throw err;
            }
            callback(err, result);
        });
    }

};

module.exports = dao;