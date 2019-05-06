<template>
	<div>
		<div class="card" v-if="!isloading">
			  <header class="card-header">
                <div class="stream-card-info"> 
                <p class="has-text-danger is-size-4 has-text-weight-semibold stream-name is-pulled-left">{{quest[0].Title}}</p>
                </div>
              </header>
			<div class="card-content">
			    <div class="media ">
			      <div class="media-content">
			      	<p class="is-size-6 breadcrumbs"><a href="/quests/">Quests</a> > <a href="/quests/ek">Eastern Kingdoms</a> > <a href="/quests/ek/am">Alterac Mountains</a></p>
			        <p class="title is-3 has-text-weight-bold page-title"></p>
			      </div>
			    </div>
			    <div class="columns">
			    	<div class="column is-8">
					    <div class="content has-text-left">
					    
				        	<div class="columns">
				        		<div class="column">
				        			<div class="is-size-5"><img src="https://classicdb.ch/templates/wowhead/images/quest_start.gif"> Start: Tirion Fordring</div>
				        			<div class="is-size-5"><img src="https://classicdb.ch/templates/wowhead/images/quest_end.gif"> End: Tirion Fordring</div>
				        		</div>
				        		<div class="column has-text-left">
				        			<div class="is-size-5">Quest Level: {{quest[0].QuestLevel}}</div>
					        		<div class="is-size-5">Minimum Level: {{quest[0].MinLevel}}</div>
				        		</div>
				        	</div>
				        	<div>
					        	<p class="has-text-weight-semibold is-size-5 has-text-white-ter">Task:</p>
							     <p>{{quest[0].Objectives}}</p>
							     <ul>
							     	<li><a href="/npc/">Plaguehound Runt</a> slain (20)</li>
							     	<li><a href="/quests/">Plaguehound</a>	slain (5)</li>
							     	<li><a href="/quests/">Frenzied Plaguehound</a> slain	(5)</li>
							     </ul>
					        	<p>Rewards</p>
							     <ul>
							     	<li>{{((quest[0].RewMoneyMaxLevel)/0.6)}} experience ( {{quest[0].RewMoneyMaxLevel}} silver at max level )</li>
							     	<li v-if="quest[0].RewRepValue1">{{quest[0].RewRepValue1}} Reputation with <a :href="'/faction/'+quest[0].RewRepFaction1">{{getFactionName(quest[0].RewRepFaction1)}}</a></li>
							     	<li v-if="quest[0].RewRepValue2">{{quest[0].RewRepValue2}} Reputation with <a :href="'/faction/'+quest[0].RewRepFaction2">{{getFactionName(quest[0].RewRepFaction2)}}</a></li>
							     	<li v-if="quest[0].RewRepValue3">{{quest[0].RewRepValue3}} Reputation with <a :href="'/faction/'+quest[0].RewRepFaction3">{{getFactionName(quest[0].RewRepFaction3)}}</a></li>
							     	<li v-if="quest[0].RewRepValue4">{{quest[0].RewRepValue4}} Reputation with <a :href="'/faction/'+quest[0].RewRepFaction4">{{getFactionName(quest[0].RewRepFaction4)}}</a></li>
							     	<li v-if="quest[0].RewRepValue5">{{quest[0].RewRepValue5}} Reputation with <a :href="'/faction/'+quest[0].RewRepFaction5">{{getFactionName(quest[0].RewRepFaction5)}}</a></li>
							     </ul>
							    <div class="columns">
								    <div class="column ">
								    	<div class="columns">
								    		<div class="column is-3">
											    <div :class="['icon-wow', 'border-uncommon']"   :style="'background-image: URL(/images/icons/medium/inv_misc_herb_03.jpg)'">
									        	</div>
								        	</div>
								        	<div class="column">
									        	<div >
									        		Mark of Testing
									        	</div>
								        	</div>
								        </div>
						        	</div>
						        	<div class="column ">
								    	<div class="columns is-8">
								    		
								    		<div class="column is-3">
								    			<a href="/test">
												    <div :class="['icon-wow', 'border-uncommon']"   :style="'background-image: URL(/images/icons/medium/inv_misc_herb_03.jpg)'">
										        	</div>
										        </a>
								        	</div>
								        	<div class="column has-text-left">
								        		<a href="/test">
										        	<div class="quest-reward-item-text has-text-weight-semibold">
										        		Mark of Testing
										        	</div>
										        </a>
								        	</div>
								       		
								        </div>
						        	</div>
						        	<div class="column ">
								    	<div class="columns">
								    		<div class="column is-3">
											    <div :class="['icon-wow', 'border-uncommon']"   :style="'background-image: URL(/images/icons/medium/inv_misc_herb_03.jpg)'">
									        	</div>
								        	</div>
								        	<div class="column">
									        	<div >
									        		Mark of Testing
									        	</div>
								        	</div>
								        </div>
						        	</div>
						        </div>
					        
				       		</div>
			  
					</div>

				</div>

				<div class="column is-3 is-offset-1" v-if="quest.length > 1">	
					<p class="has-text-weight-bold has-text-info breadcrumbs is-size-5">Quest Chain</p>
					<p class="has-text-weight-semibold has-text-left has-text-white">Pre-requistes</p>
					<ul class="has-text-left quest-chain" v-for="(list, index) in quest[1].questGroup" :key="index">
						<li><a :href="'/quest/' + list.entry" :class="compareQuestIds(list.entry, params)">{{list.Title}}</a></li>
					</ul>
					<p class="has-text-weight-semibold has-text-left has-text-white">Unlocks</p>
					<ul class="has-text-left quest-chain"  v-for="(list, index) in quest[2].questChain" :key="index">
							
										<li><a :href="'/quest/' + list.entry">{{list.Title}}</a></li>	
										
					</ul>
				</div>

			</div>
		</div>
		<footer class="card-footer stream-card-footer">
              <div class="stream-footer"> 
              <button class="button is-small is-rounded is-info is-outlined">Save Quest</button>
              <button class="button is-small is-rounded is-info is-outlined" style="margin-left: 10px">Mark Complete</button>
              </div>
              <div class="stream-action"><button class="button is-small is-rounded is-info is-outlined">Report Error</button>
              </div>
		</footer>
	</div>
</div>
</template>

<script>
import { convert } from '../middleware/convert'
import { quests } from '../middleware/quests'
export default {
    data () {
      return {
      	quest: [],
      	params: this.$route.params.id,
      	isloading: true
      }
    },
	mixins: [convert, quests],
    methods: {
    	getQuest() 
    	{

			  var self = this;
			  this.$axios.get('http://localhost:8081/quest/'  + this.params, {
			    
			  })
			  .then(function (response) {
			  	for( var i = 0; i < response.data.length; i++)
			  	{
			  	self.quest.push(response.data[i]);
			  	console.log(self.quest);
			  	self.isloading = false;
			   }
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
    	}
    },
    created() {
    	this.getQuest();
    }
}
</script>