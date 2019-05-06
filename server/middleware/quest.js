var quest = {};
var db = require('../middleware/db');
quest.checkChain = (id, newId) => {
  return new Promise(function(resolve, reject) {
    //var test = [];
    var chains = [];
    for(var i = 0; i < id.length; i++)
                {
               if(id[i].entry == newId)
                {
                  chains.push(id[i]);
                  newId = id[i].NextQuestInChain
                //  console.log("it matched!" + id[i].entry);
              }
            }
             resolve(chains);
          }
         


)};
quest.questObjectives = id => {
  return new Promise(function(resolve, reject) {
    //var test = [];
    db.connection.query("select * WHERE item_template id IN (" + id + ")", function (error, results, fields) {
    if(results.length > 1)
      {              
      	//console.log(results)
        resolve(results);
      }
      else
      {
        reject("No results found.");
      }      
    });
  });

};
quest.questGroup = id => {
  return new Promise(function(resolve, reject) {
    //var test = [];
    if(id == 0)
    {
      resolve({ExclusiveGroup : 0});
    }
    db.connection.query("select entry, ExclusiveGroup, type, Title  from quest_template WHERE ExclusiveGroup = " + id + " OR ExclusiveGroup = " + (-id), function (error, results, fields) {
    if(results.length > 1)
      {              
      	//console.log(results)
        resolve(results);
      }
      else
      {
        reject("No results found.");
      }      
    });
  });

};
quest.getInitialQuest = function() {
  return new Promise(function(resolve, reject) {
    //var test = [];

    db.connection.query("select entry, type, Title, NextQuestInChain, PrevQuestId from quest_template WHERE NextQuestInChain > 0 ", function (error, results, fields) {
    if(results)
      {              
        resolve(results);
      }
      else
      {
        reject("No results found.");
      }      
    });
  });

};

module.exports = quest;