var express = require('express')
var router = express.Router()
var db = require('../middleware/db')
var spell = require('../middleware/spell')
router.get('/search', function(req, res){
      var c = req.query.c;
      var s = req.query.s;
      db.connection.query("SELECT * FROM item_template WHERE class = " + c + " AND subclass = " + s + " LIMIT 200", function(error, results, fields) {
        if(error)
        {
          res.json({results: 0})
        }
        else

        res.send(results);
    });
});
router.get('/', function(req, res) {
    var spellHit;
    var queryString;
      if(req.query.spellhit == 1)
      {
        spellHit = 23727;
        
      }
      if(req.query.spellhit == 2)
      {
        spellHit = 23729;
      }
      queryString = "spellid_1 = " + spellHit + " OR spellid_2 = " + spellHit + " OR spellid_3 = " + spellHit + " OR spellid_4 = " + spellHit + " OR spellid_5 = " + spellHit;
      console.log(queryString);
      db.connection.query("select item_template.*, quest_template.entry AS questId, quest_template.type AS questType  FROM item_template LEFT JOIN quest_template ON item_template.entry IN (quest_template.RewChoiceItemId1, quest_template.RewChoiceItemId2, quest_template.RewChoiceItemId3, quest_template.RewChoiceItemId4, quest_template.RewChoiceItemId5, quest_template.RewChoiceItemId6, quest_template.RewItemId1, quest_template.RewItemId2, quest_template.RewItemId3, quest_template.RewItemId4)   WHERE " +  queryString, function (error, results, fields) {
      //if (error) throw error;
      for(var i = 0; i < results.length; i++)
      {
          if(results[i].spellid_1  == 23727 || results[i].spellid_2  == 23727 || results[i].spellid_3  == 23727 || results[i].spellid_4  == 23727 || results[i].spellid_5  == 23727)
          {
            results[i].spellhit = "1%";
          }
          if(results[i].spellid_1  == 23729 || results[i].spellid_2  == 23729 || results[i].spellid_3  == 23729 || results[i].spellid_4  == 23729 || results[i].spellid_5  == 23729)
          {
            results[i].spellhit = "2%";
          }
      }
      spell.checkSpelldamage(results);
      console.log(results);
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

module.exports = router