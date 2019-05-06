var spell = {}

let spelldamages = [
  {
            entry: 18053,
            spelldamage: 36
  },
  {
            entry: 9392,
            spelldamage: 1
  },
  {
            entry: 9416,
            spelldamage: 11
  }
  ,
  {
            entry: 28841,
            spelldamage: 113
  }
  ,
  {
            entry: 9417,
            spelldamage: 12
  },
  {
            entry: 9392,
            spelldamage: 1
  },
  {
            entry: 9343,
            spelldamage: 14
  },
  {
            entry: 9345,
            spelldamage: 16
  },
  {
            entry: 9346,
            spelldamage: 18
  },
  {
            entry: 9393,
            spelldamage: 2
  },
  {
            entry: 9392,
            spelldamage: 1
  },
  {
            entry: 14254,
            spelldamage: 19
  },
  {
            entry: 14799,
            spelldamage: 20
  },
  {
            entry: 14248,
            spelldamage: 21
  },
  {
            entry: 15714,
            spelldamage: 22
  },
  {
            entry: 14047,
            spelldamage: 23
  },
  {
            entry: 24595,
            spelldamage: 24
  },
  {
            entry: 15715,
            spelldamage: 25
  },
  {
            entry: 18049,
            spelldamage: 26
  },
  {
            entry: 14054,
            spelldamage: 27
  },
  {
            entry: 14127,
            spelldamage: 28
  },
  {
            entry: 14127,
            spelldamage: 29
  },
  {
            entry: 14127,
            spelldamage: 30
  },
  {
            entry: 17367,
            spelldamage: 32
  },
  {
            entry: 18050,
            spelldamage: 33
  },
  {
            entry: 18052,
            spelldamage: 34
  },
  {
            entry: 14055,
            spelldamage: 35
  },
  {
            entry: 18053,
            spelldamage: 36
  },
  {
            entry: 18054,
            spelldamage: 37
  },
  {
            entry: 18055,
            spelldamage: 39
  },
  {
            entry: 9394,
            spelldamage: 4
  },
  {
            entry: 18056,
            spelldamage: 40
  },
  {
            entry: 18057,
            spelldamage: 41
  },
  {
            entry: 18058,
            spelldamage: 42
  },
  {
            entry: 17280,
            spelldamage: 43
  },
  {
            entry: 17493,
            spelldamage: 44
  },
  {
            entry: 28264,
            spelldamage: 46
  },
  {
            entry: 24196,
            spelldamage: 47
  },
  {
            entry: 28360,
            spelldamage: 49
  },
  {
            entry: 9395,
            spelldamage: 5
  },
  {
            entry: 28767,
            spelldamage: 51
  },
  {
            entry: 26142,
            spelldamage: 53
  },
  {
            entry: 23732,
            spelldamage: 56
  },
  {
            entry: 26142,
            spelldamage: 57
  },
  {
            entry: 26155,
            spelldamage: 59
  },
  {
            entry: 9396,
            spelldamage: 6
  },
  {
            entry: 26158,
            spelldamage: 60
  },
  {
            entry: 23730,
            spelldamage: 64
  },
  {
            entry: 26227,
            spelldamage: 68
  },
  {
            entry: 9397,
            spelldamage: 7
  },
  {
            entry: 23929,
            spelldamage: 71
  },
  {
            entry: 26395,
            spelldamage: 72
  },
  {
            entry: 26460,
            spelldamage: 76
  },
  {
            entry: 9398,
            spelldamage: 8
  },
  {
            entry: 26459,
            spelldamage: 80
  },
  {
            entry: 28687,
            spelldamage: 85
  },
  {
            entry: 9415,
            spelldamage: 9
  },
  {
            entry: 28693,
            spelldamage: 95
  }
];
spell.checkSpelldamage = function(value) {
      for(var i = 0; i < value.length; i++)
      {
          for(var x = 0; x < spelldamages.length; x++)
          {
            if(value[i].spellid_1  == spelldamages[x].entry || value[i].spellid_2  == spelldamages[x].entry || value[i].spellid_3  == spelldamages[x].entry || value[i].spellid_4  == spelldamages[x].entry || value[i].spellid_5  == spelldamages[x].entry)
            {
              value[i].spelldamage = spelldamages[x].spelldamage;
            }
            
           }
           if(!value[i].spelldamage)
           {
            value[i].spelldamage = 0;
           }
      }
      
}
module.exports = spell