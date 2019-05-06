<template>
<div>
<div class="card" v-if="!isloading">
	<div class="card-content">
    <div class="media">
      <div class="media-content" >
        <p class="title is-4 has-text-weight-bold">{{ objectInfo[0].name }}</p>
      </div>
    </div>

    <div class="content has-text-left">
      {{ objectInfo[0].name }} can be found in <a href="">Stranglethorn Vale</a> (53), <a href="">Hillsbrad Foothills</a> (37), <a href="">The Barrens</a> (29), <a class="has-text-weight-bold active-text" href="">Wetlands</a> ({{amountObjects}}), <a href="">Arathi Highlands</a> (21), <a href="">Ashenvale</a> (21), <a href="">Badlands</a> (20), <a href="">Stonetalon Mountains</a> (20), <a href="">Duskwood</a> (19), <a href="">Thousand Needles</a> (15), <a href="">Desolace</a> (13), <a href="">Swamp of Sorrows</a> (6), <a href="">Dustwallow Marsh</a> (5), <a href="">Alterac Mountains</a> (3), <a href="">Wailing Caverns</a> (2)
    </div>
  </div>
  <div class="has-text-centered ">
      <div class="map has-text-primary is-size-7">
      	<div class="map-region">
     	 <img class="map-border" src="/images/maps/enus/zoom/11.jpg" alt="Placeholder image" width="100%">
     	 <span  v-for="(coords, index) in objectCoords" :key="index">
     	 	<div class="map-icon-wrapper">

     	 	<i class="fas fa-map-marker-alt map-icons bordered-icon" :style=" { left : coords.y + '%', top: coords.x + '%' } "> </i>

     	 	<span class="map-icons object-node-info" :style=" { left : coords.x + '%', top: coords.y + '%' }">
     	 		X: {{ coords.x }}
     	 		<br>
     	 		Y: {{ coords.y }}
     	 	</span>
     	 	</div>
     	 </span>

      </div>
      </div>
      </div>
  <div class="card-content">
    <div class="content">
  <div class="my-pagination has-text-right">
   <button class="button is-info is-outlined" style="margin-right: 10px" title="This is the first page" @click="prevPage">Previous</button>
   <button class="button is-info is-outlined" @click="nextPage">Next page</button>
  </div>
      <table class="table">
      	<thead> 

      		<th class="has-text-left">Name</th>
      		<th class="has-text-centered">Level</th>
      		<th class="has-text-centered">Req</th>
      		<th class="has-text-centered">Type</th>
      		<th class="has-text-centered">%</th>
      	</thead>
      	<tr class="is-size-5" v-for="(items, index) in paginatedLootData" :key="index">
      		<td><div :class="['icon-wow', 'is-pulled-left', checkQuality(items.Quality)]"   :style="'background-image: URL(/images/icons/medium/inv_misc_herb_03.jpg)'">
<!--       			<span class="icon-img-text">1,3</span> --> 
      			</div> <div class="item-name">{{items.name}}</div> </td>
      		<td class="has-text-centered">{{items.ItemLevel}}</td>
      		<td class="has-text-centered">{{items.RequiredLevel}}</td>
      		<td class="has-text-centered">{{ getItemType((items.class)) }}</td>
      		<td class="has-text-centered">{{items.ChanceOrQuestChance}}</td>
      	</tr>
      	<tr>

        </tr>  
      </table>
    </div>
  </div>
</div>

</div>
</template>
<script>
import { convert } from '../middleware/convert'
export default {
    name: 'my-component',
    data () {
      return {
      	objectCoords: [],
      	initialCoords: [],
      	objectInfo: [],
      	zoneMinX: -2147.92,
      	zoneMaxX: -4904.17, 
      	zoneMinY: -389.583312988,
      	zoneMaxY: -4525,
      	zoneId: 11,
      	amountObjects: '',
      	params: this.$route.params.id,
      	isloading: true,
      	lootArray: [],
      	pageCounts: '',
      	pageNumber: 0

      }
    },
    props:{
	    size:{
	      type:Number,
	      required:false,
	      default: 10
	    }
	},
	mixins: [convert],
    computed: {
    pageCount(){
      let l = this.objectInfo[1].loot.length,
          s = this.size;
		//console.log('Pagecount: ' + Math.floor(l/s));
          return Math.floor(l/s);
          
	  },
      paginatedLootData(){
		 const start = this.pageNumber * this.size,
		 end = start + this.size;
		//  console.log(this.objectInfo[1].loot.slice(start, end));
		  return this.objectInfo[1].loot.slice(start, end);
		}
    },
    methods: {
    	getObjects() 
    	{

			  var self = this;
			  this.$axios.get('http://localhost:8081/map/'  + this.params, {
			    
			  })
			  .then(function (response) {
			  	self.amountObjects = response.data.length;
			  	for( var i = 0; i < response.data.length; i++)
			  	{
			  	self.initialCoords.push(response.data[i]);
			  }
			   // console.log(self.initialCoords);
			    self.convertCoords();
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
			//  console.log("Searching.. BROKEN2");
			  //console.log(this.paginatedLootData);
    	},

      nextPage(){
               	if(this.pageNumber < 9)
      	{
        	this.pageNumber++;
        }
       //  console.log('Current Page number is: ' + this.pageNumber);
      },
      prevPage(){
      	if(this.pageNumber > 0)
      	{
        	this.pageNumber--;
        }
       // console.log('Current Page number is: ' + this.pageNumber);
      },
    	getObjectInfo() 
    	{
			  var self = this;
			  this.$axios.get('http://localhost:8081/object/'  + this.params, {
			    
			  })
			  .then(function (response) {
			  	
			  	for( var i = 0; i < response.data.length; i++)
			  	{
			  	self.objectInfo.push(response.data[i]);
			  }
			   // console.log(self.objectInfo);
			    self.isloading = false;
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
			 // console.log("Searching.. broken");
    	},
    	getMapCoords() {

    	},
    	convertCoords(){
    		for(var i = 0; i < this.initialCoords.length; i ++)
    		{
    			var testy =  Math.round(((this.initialCoords[i].position_y - this.zoneMinY) / ((this.zoneMaxY - this.zoneMinY)/100)) - 1);
    			var testx =  Math.round(((this.initialCoords[i].position_x - this.zoneMinX) / ((this.zoneMaxX - this.zoneMinX)/100)) - 1);
    			this.objectCoords.push( {'x' : testx, 'y' : testy });
    		}
    		//console.log(this.objectCoords);
    	}
    },
    beforeMount() {
    	this.getObjects();
    	this.getObjectInfo();
    }
}
</script>