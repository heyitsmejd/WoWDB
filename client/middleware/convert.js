export const convert = {
  methods: {
    getItemType (i) {
      if(i === 0)
      {
        return 'Consumable';
      }
      if(i === 1)
      {
        return 'Container';
      }
      if(i === 2)
      {
        return 'Weapon';
      }
      if(i === 3)
      {
        return 'Gem';
      }
      if(i === 4)
      {
        return 'Armor';
      }
      if(i === 5)
      {
        return 'Reagent';
      }
      if(i === 6)
      {
        return 'Projectile';
      }
      if(i === 7)
      {
        return 'Trade Goods';
      }
      if(i === 9)
      {
        return 'Recipe';
      }
      if(i === 11)
      {
        return 'Quiver';
      }
      if(i === 12)
      {
        return 'Quest';
      }
      if(i === 13)
      {
        return 'Key';
      }
      if(i === 15)
      {
        return 'Miscellaneous';
      }
      if(i === 16)
      {
        return 'Glyph';
      }

    },
    compareQuestIds(val, param) {
      if(val == param)
      {
        return 'has-text-weight-semibold has-text-primary';
      }
    },
    checkQuality (val) {
      if(val === 0)
      {
        return "border-poor";
      }
      if(val === 1)
      {
        return "border-common";
      }
      if(val === 2)
      {
        return "border-uncommon";
      }
      if(val === 3)
      {
        return "border-rare";
      }
      if(val === 4)
      {
        return "border-epic";
      }
      if(val === 5)
      {
        return "border-legendary";
      }
      if(val === 6)
      {
        return "border-artifact";
      }
    },
    getItemClass (itemClass, itemSubClass, itemSlot) {
      var Str = this.getItemSlot(itemSlot);
      if(itemClass == 4 && itemSubClass == 1)
      {
        return "Cloth " + Str;
      }
      if(itemClass == 4 && itemSubClass == 0)
      {
        return Str;
      }
      if(itemClass == 4 && itemSubClass == 2)
      {
        return "Leather " + Str;
      }
      if(itemClass == 4 && itemSubClass == 3)
      {
        return "Mail " + Str;
      }
      if(itemClass == 4 && itemSubClass == 4)
      {
        return "Plate " + Str;
      }
      if(itemClass == 4 && itemSubClass == 6)
      {
        return "Shield " + Str;
      }
      if(itemClass == 4 && itemSubClass == 7)
      {
        return "Libram";
      }
      if(itemClass == 4 && itemSubClass == 9)
      {
        return "Idol";
      }
      if(itemClass == 4 && itemSubClass == 10)
      {
        return "Totem";
      }
      if(itemClass == 2 && itemSubClass == 15)
      {
        return  Str + " dagger";
      }
      if(itemClass == 2 && itemSubClass == 7)
      {
        return  Str + " sword";
      }
      if(itemClass == 2 && itemSubClass == 8)
      {
        return Str + " sword";
      }
      if(itemClass == 2 && itemSubClass == 10)
      {
        return Str + " staff";
      }
    },
    getQuestType(value)
    {
      var Str;
      if(value == 81)
      {
        Str = "Dungeon Quest"
        return Str;
      }
      if(value == 1)
      {
        Str = "Elite Quest";
        return Str;
      }
      if(value == 62)
      {
        Str = "Raid Quest";
        return Str;
      }
      if(value == 83)
      {
        Str = "Legendary Quest";
        return Str;
      }
      if(value == 41)
      {
        Str = "PvP Quest";
        return Str;
      }
      if(value == 0)
      {
        Str = "Quest";
        return Str;
      }
      
    },
    buildLink(item, quest)
    {
      var link;
      if(quest)
      {
        link = "/quest/" + quest;
        return link;
      }
      if(!quest)
      {
        link = "/item/" + item;
        return link;
      }
    },
    dropOrQuest (quest)
    {
        var Str;
        if(quest)
        {
          Str = this.getQuestType(quest)
          return Str;
        }
        if(!quest)
        {
          Str = "Drop";
          return Str;
        }
    },
    getItemSlot(value)
    {
      if(value === 1)
      {
        return "head";
      }
      if(value === 2)
      {
        return "neck";
      }
       if(value === 3)
      {
        return "shoulder";
      }
            if(value === 4)
      {
        return "shirt";
      }
      if(value === 5)
      {
        return "chest";
      }
      if(value === 6)
      {
        return "waist";
      }
      if(value === 7)
      {
        return "legs";
      }
      if(value === 8)
      {
        return "feet";
      }
            if(value === 9)
      {
        return "wrists";
      }
      if(value === 10)
      {
        return "hands";
      }
      if(value === 11)
      {
        return "ring";
      }
      if(value === 12)
      {
        return "trinket";
      }
      if(value === 13)
      {
        return "One hand";
      }
      if(value === 14)
      {
        return "shield";
      }
            if(value === 15)
      {
        return "bow";
      }
      if(value === 16)
      {
        return "back";
      }
      if(value === 17)
      {
        return "Two-hand";
      }
      if(value === 18)
      {
        return "Bag";
      }
      if(value === 19)
      {
        return "Tabard";
      }
      if(value === 20)
      {
        return "robe";
      }
            if(value === 21)
      {
        return "Main hand";
      }
      if(value === 22)
      {
        return "Off hand";
      }
      if(value === 23)
      {
        return "Held in off hand";
      }
      if(value === 24)
      {
        return "Ammo";
      }
      if(value === 25)
      {
        return "Thrown";
      }
      if(value === 26)
      {
        return "Ranged";
      }
      if(value === 27)
      {
        return "Quiver";
      }
      if(value === 28)
      {
        return "Relic";
      }
    },
    fixQuestText(string) {
      var g = JSON.stringify(string);
      var h = string.replace(/\$B/g, "\n");
    
    return h
  }
  }

};