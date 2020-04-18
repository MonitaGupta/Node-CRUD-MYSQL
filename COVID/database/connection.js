const mysql = require('mysql2');


var promisePool;
const createConnection = function(){
    var db = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'ecommerce',
        password: 'Angel123#',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      });
    
       promisePool = db.promise();
       return promisePool;
}
module.exports .createConnection = createConnection;

const getConnection = function() {
    return promisePool;
}

module.exports.getConnection= getConnection;
     
const executeQuery = async function(userInput) {
    try {
        var sql = userInput.sql;
        var connection = userInput.connection;
        let [rows, fields] = await connection.execute(sql);
        return rows;
    } catch (err) {
        return err;
    }   
}
module.exports.executeQuery = executeQuery;