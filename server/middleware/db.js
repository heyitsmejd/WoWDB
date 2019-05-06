var mysql      = require('mysql');

var db  = {};

db.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'logs'
});

module.exports = db