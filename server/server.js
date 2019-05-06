var express = require('express'); 
var app = express();
var mongoose = require('mongoose');
var crypto = require('crypto');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
bodyParser.urlencoded({ extended: false });
//Regular routes
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var mysql      = require('mysql');
var connection = mysql  .createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'logs'
});
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('./config.js');
app.use(bodyParser.json());
const news = require('./routes/news')
const quest = require('./routes/quests')
const items = require('./routes/items')
app.use('/news', news)
app.use('/items', items)
const streams = require('./routes/streams')
app.use('/streams', streams)
app.use('/quest', quest)
app.post('/register', function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.query.password, 10);
  var userInfo = {
    username: req.query.username,
    hash: hashedPassword,
    email: req.query.email
  };
  var username = req.query.username;
  connection.query("INSERT INTO users SET ?", userInfo, 
  function (err, user) {
    if (err)
    {
     res.status(500).send("There was a problem registering the user.");
     return;
    }
    else
    {
    // create a token
    var token = jwt.sign({ user: user.req.username }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  }
  }); 
});
app.post('/logout', (req, res, next) => {
  res.json({ status: 'OK' })
})
  app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if (!username || !password) return res.status(400).json({type: 'error', message: 'username and password fields are essential for authentication.'})
    connection.query('select * from `users` where `username`=?', username, (error, results) => {
      if (error) return res.status(500).json({type: 'error', message: 'db error', error})
      if (results.length == 0) return res.status(403).json({type: 'error', message: 'User with provided username not found in database.'})
      const user = results[0]
      bcrypt.compare(password, user.hash, function(err, result) {
        if(result) {
          res.json({
            type: 'success',
            message: 'User logged in.',
            token: jwt.sign({username: user.username, scope: user.role}, config.secret, {expiresIn: '1h'})
          })
        } else {
         res.status(403).json({type: 'error', message: 'Password is incorrect.'})
        } 
      });

    })
  })
app.get('/me', (req, res, next) => {
  res.json({ user : 'admin' })
})
app.get('/map/:id', function(req, res) {
    
    connection.query("select position_x, position_y, spawntimesecs from gameobject WHERE id = " + req.params.id + " AND position_y < -389.583312988 AND position_y > -4525 AND position_x < -2147.916 AND position_x > -4904 AND map = 0", function (error, results, fields) {
      //if (error) throw error;
      if(results.length > 1)
      {
         res.send(JSON.stringify(results));
      }
      else
      {
        res.status("No results found.");
      }
      console.log(results[0]);
    });
 

});

     var gameObject;
app.get('/object/:id', function(req, res) {
    var newId = mysql.escape(req.params.id);
    var objecttable = 'gameobject_template';
    var loottable = 'gameobject_loot_template';
    var itemtable = 'item_template';
    var lootID;
    var endResults = [];
    var lootQuery = [];
    connection.query("select type, name, data0, data1 from " + objecttable + " WHERE entry = " + newId, function (error, results, fields) {
      if (error) throw error;
      if(results.length > 0)
      {
        console.log(JSON.stringify(results));
        endResults.push(results[0]);
        var objectData1 = results[0].data1;
       // console.log('You made it here, ' + JSON.stringify());
        connection.query("select * from item_template LEFT JOIN gameobject_loot_template ON item_template.entry = gameobject_loot_template.item  WHERE gameobject_loot_template.entry = " + objectData1 + " order by ChanceOrQuestChance desc limit 100", function (error, results, fields) {
             // if (error) throw error;
              if(results.length > 0)
              {
                lootQuery.push(results);
                endResults.push({'loot' : results});
                res.send(JSON.stringify(endResults));
              }
              else
              {
                res.status("No results found.");
              }
              console.log(results[0]);
            });

      }
      else
      {
        res.status("No results found.");
      }
      console.log(results[0]);
    });

});
var jwtDecode = require('jwt-decode');
var questId;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



 app.listen(8081);
console.log('Server started on port 8081');