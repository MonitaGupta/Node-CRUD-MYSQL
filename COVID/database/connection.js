const mysql = require('mysql2/promise');
const { to, ReE, ReS }  = require('../service/util.service');

const createConnection = async function(){
    var con = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "#######",
        database: "ecommerce"     
      });

    if(con != null) {
        return con;
    } else {
        let error = {message: "Not connected"};
        return error;
    }
}

module.exports. createConnection = createConnection;
       
const executeQuery = async function(userInput) {
    var res = []
    let any;
    var sql = userInput.sql;
    var connection = userInput.connection;
    let [rows, fields] = await connection.execute(sql);
    return rows;
}
module.exports.executeQuery = executeQuery;


const closeConnection = function(userInput) {
    var connection = userInput.con;
    connection.end();
}
module.exports.executeQuery = executeQuery;