var express = require('express')
var router = express.Router()
var db = require('../middleware/db')
var jwt = require('jsonwebtoken');
var config = require('../config.js');
var jwtDecode = require('jwt-decode');
router.get('/', function(req,res){

        db.connection.query("SELECT * FROM news ORDER BY id DESC", function(error, results, fields) {
            //console.log(user.user + " fetched results")
            res.json(results);
          });

});
router.post('/edit', function(req,res){
  console.log(req.body.id)
      let query = "title = '" + req.body.title  + "', content = '" + req.body.content + "', updated = '" + req.body.updated + "', visible = '" + req.body.visible + "', category = '" + req.body.category + "'"
               db.connection.query("UPDATE news SET " + query + " WHERE id = ?", req.body.id, function(error, results, fields) {
            //console.log(user.user + " fetched results")
            res.json(results);
          });

});
router.post('/get', function(req,res){
  console.log(req.body.id)
        db.connection.query("SELECT * FROM news WHERE id = ?", req.body.id, function(error, results, fields) {
            //console.log(user.user + " fetched results")
            res.json(results);
          });

});
router.post('/delete', function(req, res) {
   var post = req.body.id;
   const token = req.headers['x-access-token']
     if (!token) return res.status(400).json({type: 'error', message: 'x-access-token header not found.'})
     var user = jwtDecode(token)
     if(user.role == 'admin')
     { 
        jwt.verify(token, config.secret, (error, result) => {
        if (error) return res.status(403).json({type: 'error', message: 'Provided token is invalid.', error})
        db.connection.query("DELETE FROM news WHERE id = ?", post, function(error, results, fields) {
              //if(error) console.log(error);
                console.log("1 record deleted");
                res.status(200).json({type: 'success', message: ' has been deleted'});
            });
     })
     }
     else
     {
        //   return res.status(403).json({type: 'error', message: 'user level not high enough.'})
     }  
});
router.post('/add', function(req, res) {
     const token = req.headers['x-access-token']
     if (!token) return res.status(400).json({type: 'error', message: 'x-access-token header not found.'})
     var user = jwtDecode(token)
     if(user.role == 'admin')
     { 
        jwt.verify(token, config.secret, (error, result) => {
        if (error) return res.status(403).json({type: 'error', message: 'Provided token is invalid.', error})
            let title = req.body.title;
            let category = 'lol';
            let posted = new Date().toISOString();
            let updated = new Date().toISOString().slice(0,10);
            let content = req.body.content;
            let author = req.body.author;
            let deleted = 0;
            let visible = 1;
            db.connection.query("INSERT INTO news (`title`, `category`, `content`, `author`, `deleted`, `visible`, `posted`) VALUES ('" + title + "','" + category + "','" + content + "','" + author + "','" + deleted + "','" + visible + "','" + posted + "')", function(error, results, fields) {
              //if(error) console.log(error);
                console.log("1 record inserted, ID: " + results.insertId);
                res.status(200).json({type: 'success', message: 'post ' + result.insertId + 'has been added'});
            });
     })
     }
     else
     {
        //   return res.status(403).json({type: 'error', message: 'user level not high enough.'})
     }

});



module.exports = router