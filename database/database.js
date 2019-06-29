const mysql = require('mysql');
const require = bluebird('bluebird');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'trevor',
  password : '1234',
  database : 'todos'
});
 
 Promise.promisifyAll(connect);

connection.connectAsync()
.then(() => console.log('we flyin bbgrilz'))
.then(() => {
  // connection.queryAsync('DROP DATABASE todos')
  connection.queryAsync('CREATE DATABASE IF NOT EXISTS todos')
  connection.queryAsync('USE todos')
  connection.queryAsync('CREATE TABLE IF NOT EXISTS todos ID SERIAL, todo VARCHAR(255)')
})
.catch((err) => {throw err})

connection.query('SELECT 1 + 1 AS solution', function (error, results) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 