var express = require('express')
var router = express.Router()
const quest = require('../middleware/quest')
var db = require('../middleware/db');
router.get('/:id', function(req, res) {

    var newId = req.params.id;
    var objecttable = 'gameobject_template';
    var loottable = 'gameobject_loot_template';
    var itemtable = 'item_template';
    var endResults = [];
    var lootQuery = [];
   // console.log(newId)
    // questId = mysql.escape(req.body.id);
    db.connection.query("select * from quest_template WHERE entry = " + newId, function (error, results, fields) {
      if (error) return;
      if(results.length > 0)
      {
          var g;
          var tempId = results[0].ExclusiveGroup;
          var nextQuest = results[0].NextQuestInChain;
         // console.log(results[0].NextQuestInChain);
          var prevQuest = results[0].PrevQuestId;
         // console.log(nextQuest);
          quest.questGroup(tempId).then(function(result)
          {
            console.log('quest Group')
            results.push({questGroup: result });
            quest.getInitialQuest().then(function(resultx)
              {
                console.log('intial Group')
               // console.log(resultx)
                quest.checkChain(resultx, nextQuest).then(function(resultg)
                {
                  console.log(resultg)
                  results.push( { questChain : resultg })
                  res.send(results)
                })
               // console.log(resultx);
                // g = resultx;
                // var Quests = [];
                // var xxx;
                // for(var index in g)
                // {
                //     if(g[index].PrevQuestId == newId)
                //     {
                //       xxx = g[index].entry;
                //       console.log(xxx);
                //           Quests.push({QuestChain: g[index]});
                //           newId = g[index].entry;
                //        }

                // }
                  
                });
                
           
         }).catch(function(error) {
         // console.log(error)
          //res.send(results);
        });
      }
      else  
      {
        res.status("No results found.");
      }
     // console.log(results[0]);
    });

});



module.exports = router