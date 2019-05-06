<template>
<div>
<div class="card" v-if="!isloading">
	<div class="card-content">
    <div class="media">
      <div class="media-content" >
        <p class="title has-text-danger is-4 has-text-weight-bold">Items</p>
      </div>
    </div>
     <form ref="searchInputs" action="http://localhost:8081/items" @submit.prevent="onSubmit">
    <div class="content has-text-left">
      <div class="columns">
        <div class="column has-text-left has-text-white is-inline-block-mobile">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label has-text-info">Name:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input" type="text" v-model="search.itemname">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label has-text-info">Item level:</label>
            </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded ">
                    <input class="input" type="text" v-model="search.ilvlmin">
                  </p>
                </div>
                <div class="field-label is-normal">
                  <label class="label has-text-info">-</label>
                </div>
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" v-model="search.ilvlmax">
                  </p>
                </div>
             </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label has-text-info">Req level:</label>
            </div>
            <div class="field-body">
                <div class="field">
                  <p class="control is-expanded ">
                    <input class="input" type="text" v-model="search.reqlevelmin">
                  </p>
                </div>
                <div class="field-label is-normal">
                  <label class="label has-text-info">-</label>
                </div>
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" v-model="search.reqlevelmax">
                  </p>
                </div>
             </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label has-text-info">Patch</label>
            </div>
            <div class="field-body">
              <div class="control" style="margin-right: 10px">
                <div class="select">
                  <select v-model="search.patch">
                      <option>1.1</option>
                      <option>1.2</option>
                      <option>1.3</option>
                      <option>1.4</option>
                      <option>1.5</option>
                      <option>1.6</option>
                      <option>1.7</option>
                      <option>1.8</option>
                      <option>1.9</option>
                      <option>1.10</option>
                      <option>1.11</option>
                      <option>1.12</option>
                  </select>
                </div>
              </div>
          </div>
        </div>
          <p class="title is-4 has-text-danger has-text-weight-bold">Stats</p>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label has-text-info" >Modifier 1:</label>
            </div>
            <div class="field-body">
              <div class="control" style="margin-right: 10px">
                <div class="select">
                  <select v-model="search.mod1">
                    <optgroup label="Base Stats ">
                      <option>Agility</option>
                      <option>Intellect</option>
                      <option>Spirit</option>
                      <option>Stamina</option>
                      <option>Strength</option>
                    </optgroup>
                    <optgroup label="Physical Stats">
                      <option>Attack Power</option>
                      <option>Critical Strike</option>
                      <option>Hit</option>
                      <option>Ranged Attack Power</option>
                    </optgroup>
                    <optgroup label="Magical Stats">
                      <option>Healing</option>
                      <option>Mana Regen</option>
                      <option>Spell Critical</option>
                      <option>Spell Hit</option>
                      <option>Spell Penetration</option>
                      <option>Spell Power</option>
                    </optgroup>
                    <optgroup label="Defensive Stats">
                      <option>Armor</option>
                      <option>Block %</option>
                      <option>Block Value</option>
                      <option>Defense</option>
                      <option>Dodge</option>
                      <option>Parry</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded ">
                    <input class="input" type="text" v-model="search.mod1min">
                  </p>
                </div>
                <div class="field-label is-normal">
                  <label class="label">-</label>
                </div>
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" v-model="search.mod1max" >
                  </p>
                </div>
             </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label has-text-info" >Modifier 2:</label>
            </div>
            <div class="field-body">
              <div class="control" style="margin-right: 10px">
                <div class="select">
                  <select v-model="search.mod2">
                    <optgroup label="Base Stats">
                      <option>Agility</option>
                      <option>Intellect</option>
                      <option>Spirit</option>
                      <option>Stamina</option>
                      <option>Strength</option>
                    </optgroup>
                    <optgroup label="Physical Stats">
                      <option>Attack Power</option>
                      <option>Critical Strike</option>
                      <option>Hit</option>
                      <option>Ranged Attack Power</option>
                    </optgroup>
                    <optgroup label="Magical Stats">
                      <option>Healing</option>
                      <option>Mana Regen</option>
                      <option>Spell Critical</option>
                      <option>Spell Hit</option>
                      <option>Spell Penetration</option>
                      <option>Spell Power</option>
                    </optgroup>
                    <optgroup label="Defensive Stats">
                      <option>Armor</option>
                      <option>Block %</option>
                      <option>Block Value</option>
                      <option>Defense</option>
                      <option>Dodge</option>
                      <option>Parry</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" v-model="search.mod2min">
                  </p>
                </div>
                <div class="field-label is-normal">
                  <label class="label has-text-info">-</label>
                </div>
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" v-model="search.mod2max">
                  </p>
                </div>
             </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label has-text-info" >Modifier 3:</label>
            </div>
            <div class="field-body">
              <div class="control" style="margin-right: 10px">
                <div class="select">
                  <select v-model="search.mod3">
                    <optgroup label="Base Stats">
                      <option>Agility</option>
                      <option>Intellect</option>
                      <option>Spirit</option>
                      <option>Stamina</option>
                      <option>Strength</option>
                    </optgroup>
                    <optgroup label="Physical Stats">
                      <option>Attack Power</option>
                      <option>Critical Strike</option>
                      <option>Hit</option>
                      <option>Ranged Attack Power</option>
                    </optgroup>
                    <optgroup label="Magical Stats">
                      <option>Healing</option>
                      <option>Mana Regen</option>
                      <option>Spell Critical</option>
                      <option>Spell Hit</option>
                      <option>Spell Penetration</option>
                      <option>Spell Power</option>
                    </optgroup>
                    <optgroup label="Defensive Stats">
                      <option>Armor</option>
                      <option>Block %</option>
                      <option>Block Value</option>
                      <option>Defense</option>
                      <option>Dodge</option>
                      <option>Parry</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" v-model="search.mod3min" value="">
                  </p>
                </div>
                <div class="field-label is-normal">
                  <label class="label has-text-info">-</label>
                </div>
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" v-model="search.mod3max" value="">
                  </p>
                </div>
             </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="columns is-mobile no-p-t">
            <div class="column is-one-fourth-mobile"></div>
            <div class="column is-half-mobile ">
              <span class="select-label is-normal has-text-info">Slot</span>
              <div class="select is-multiple">
                <select multiple size="5" v-model="search.slot">
                  <option value="16">Back</option>
                  <option value="18">Bag</option>
                  <option value="5">Chest</option>
                  <option value="8">Feet</option>
                  <option value="11">Finger</option>
                  <option value="10">Hands</option>
                  <option value="1">Head</option>
                  <option value="23">Held In Off-hand</option>
                  <option value="7">Legs</option>
                  <option value="21">Main-Hand</option>
                  <option value="22">Off Hand</option>
                  <option value="13">One-Hand</option>
                  <option value="24">Projectile</option>
                  <option value="15">Ranged</option>
                  <option value="28">Relic</option>
                  <option value="14">Shield</option>
                  <option value="4">Shirt</option>
                  <option value="3">Shoulder</option>
                  <option value="19">Tabard</option>
                  <option value="25">Thrown</option>
                  <option value="12">Trinket</option>
                  <option value="17">Two-Hand</option>
                  <option value="6">Waist</option>
                  <option value="9">Wrist</option>
                </select>
              </div>
            </div>
            <div class="column is-half-mobile">
             <span class="select-label has-text-info">Quality</span>
              <div class="select is-multiple">
                <select multiple size="5" v-model="search.quality">
                  <option value="Poor">Poor</option>
                  <option value="Uncommon">Uncommon</option>
                  <option value="Rare">Rare</option>
                  <option value="Epic">Epic</option>
                  <option value="Legendary">Legendary</option>
                  <option value="Artifact">Artifact</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-left">
    <button class="button is-info is-outlined" >Search</button>
    </div>
  </form>
  </div>
  <div class="card-content">
    <div class="content">
  <div class="my-pagination has-text-right">
 <!--   <button class="button is-info is-outlined" style="margin-right: 10px" title="This is the first page" @click="prevPage">Previous</button>
   <button class="button is-info is-outlined" @click="nextPage">Next page</button> -->
  </div>
      <table class="table">
      	<thead> 
      		<th class="has-text-left">Name</th>
      		<th class="has-text-centered">Level</th>
      		<th class="has-text-centered">Req</th>
          <th class="has-text-centered">Source</th>
      		<th class="has-text-centered">Type</th>
      		<th class="has-text-centered">Spell Damage</th>
          <th class="has-text-centered">Spell Hit</th>
      	</thead>
       <tr class="is-size-5" v-for="(items, index) in orderedItems" :key="index" v-if="(objectInfo.length > 1)">
          <td><a :href="'/item/' + items.entry"> <div :class="['icon-wow', 'is-pulled-left', checkQuality(items.Quality)]"   :style="'background-image: URL(/images/icons/medium/inv_misc_herb_03.jpg)'">
<!--            <span class="icon-img-text">1,3</span> --> 
            </div> <div class="item-name">{{items.name}}</div></a> </td>
          <td class="has-text-centered">{{items.ItemLevel}}</td>
          <td class="has-text-centered">{{items.RequiredLevel}}</td>
          <td class="has-text-centered"><a :href="buildLink(items.entry, items.questId)">{{ dropOrQuest(items.questType) }}</a></td>
          <td class="has-text-centered">{{ getItemClass(items.class, items.subclass, items.InventoryType)}}</td>
          <td class="has-text-centered">{{items.spelldamage}}</td>
          <td class="has-text-centered">{{items.spellhit}}</td>
        </tr>
      </table>
      <div class="no-results" v-if="orderedItems.length < 1">
        No results
      </div>
    </div>

  </div>
</div>

</div>
</template>
<script>
import { convert } from '../middleware/convert'
export default {
  data() {
    return {
      search: 
      {
        mod1: '',
        mod2: '',
        mod3: '',
        mod3max: '',
        mod2min: '',
        mod2max:'',
        mod3min: '',
        mod1max: '',
        mod1min: '',
        ilvlmax: '',
        ilvlmin: '',
        patch: '',
        reqlevelmax: '',
        reqlevelmin: '',
        itemname: '',
        quality: [],
        slot: [],
        pageNumber: 0,
        params: this.$route.query,
        isloading: true
      },
      query: [],
      objectInfo: [],
        currentSort:'spelldamage',
        currentSortDir:'desc'
    }
  },
  mixins : [ convert ]  ,
  props:{
      size:{
        type:Number,
        required:false,
        default: 10
      }
  },
computed: {
    orderedItems() {
      var array = this.objectInfo;
      // var sort = this.allowSort;
      // const filteredResults = array.filter(function(e){
      //   for(var x = 0; x < sort.length; x++){
      //   if(e.class == sort[x])
      //   {
      //       return true
      //   }
      // }})
      array.sort(function(a, b) {
        console.log(b)
    return parseFloat(b.ItemLevel) - parseFloat(a.ItemLevel);
});
      console.log(array)
      return array
    }
},
  methods : {
            toggleOrder(name) {
            this.currentOrder = name;
        },
          sort:function(s) {
    //if s == current sort, reverse
    if(s === this.currentSort) {
      this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    }
    this.currentSort = s;
  },
          nextPage(){
                if(this.pageNumber < 9)
        {
          this.pageNumber++;
        }
       //  console.log('Current Page number is: ' + this.pageNumber);
      },
          getObjectInfo() 
      {
        var xyz = [];
        var self = this;
        var queryString = Object.keys(this.$route.query).map(key => key + '=' + this.$route.query[key]).join('&');
        console.log(JSON.stringify(this.$route.query));
        this.$axios.get('http://localhost:8081/items/search?' + queryString, {
          
        })
        .then(function (response) {
          for( var i = 0; i < response.data.length; i++)
            {
            xyz.push(response.data[i]);
          }
          // self.objectInfo.push(response.data);
          var keys = Object.keys(xyz);
          self.objectInfo = Object.values(xyz);
          console.log(Array.isArray(self.objectInfo));
          for (var i = 0; i < self.objectInfo.length; i++) {
            self.objectInfo.sort(function(a, b) { return  b.spelldamage - a.spelldamage; });
          }
          console.log(self.objectInfo);
          //console.log(self.objectInfo);
          //console.log(self.objectInfo);
          self.isloading = false;
        })
        .catch(function (error) {
          console.log(error);
        });
       // console.log("Searching.. broken");
      },
      prevPage(){
        if(this.pageNumber > 0)
        {
          this.pageNumber--;
        }
       // console.log('Current Page number is: ' + this.pageNumber);
      },
    searchForm() {
      this.query = [];
      for (var key in this.search) 
      {
          if (this.search[key].length > 0 )
          {

              this.query.push( key = this.search[key]);
          }
      }
      var formData = new FormData(this.$refs.searchInputs);
      var self = this;
        this.$axios.get('http://localhost:8081/items'  + this.formData, { })
        .then(function (response) {
          console.log('test');
        }
        )
        .catch(function (error) {
          console.log(error);
        });
      console.log(formData);
    },

  },
          beforeMount() {
      this.getObjectInfo();
    }
}
</script>