<template>
	<div class="flex-container">
    <div class="page-title" v-if="!viewingStream">
      <div class="card-header-title">
        Live Streams 
      </div>
      <div class="refresh">
        <button class="is-rounded button is-danger" @click="refresh()"><i class="fas fa-sync"></i></button>
      </div>
      <div class="stream-classes"> 
        <div class="classButton class-icon-active" id="Druid" style="background-image: URL('images/icons/medium/class_druid.jpg');" @click="toggleSort('Druid', $event)"></div>
        <div class="classButton class-icon-active" id="Hunter" style="background-image: URL('images/icons/medium/class_hunter.jpg');" @click="toggleSort('Hunter', $event)"></div>
        <div class="classButton class-icon-active" id="Mage" style="background-image: URL('images/icons/medium/class_mage.jpg');" @click="toggleSort('Mage', $event)"></div>
        <div class="classButton class-icon-active" id="Paladin" style="background-image: URL('images/icons/medium/class_paladin.jpg');" @click="toggleSort('Paladin', $event)"></div>
        <div class="classButton class-icon-active" id="Priest" style="background-image: URL('images/icons/medium/class_priest.jpg');" @click="toggleSort('Priest', $event)"></div>
        <div class="classButton class-icon-active" id="Rogue" style="background-image: URL('images/icons/medium/class_rogue.jpg');" @click="toggleSort('Rogue', $event)"></div>
        <div class="classButton class-icon-active" id="Shaman" style="background-image: URL('images/icons/medium/class_shaman.jpg');" @click="toggleSort('Shaman', $event)"></div>
        <div class="classButton class-icon-active" id="Warlock" style="background-image: URL('images/icons/medium/class_warlock.jpg');" @click="toggleSort('Warlock', $event)"></div>
        <div class="classButton class-icon-active" id="Warrior" style="background-image: URL('images/icons/medium/class_warrior.jpg');" @click="toggleSort('Warrior', $event)"></div>
      </div>
    </div>
		<div class="page-content" v-if="!isloading">
		  <div class="columns is-multiline" v-if="!viewingStream">
		  	<div class="column is-one-third" v-for="(stream, index) in sortedStreams" :key="index.id" v-if="stream.live" >
          <div class="card"> 
            <header class="card-header">
              <div class="stream-card-info"> 
                <img class="stream-class-icon" :src="classImg(stream.class)"> <p class="has-text-danger has-text-weight-semibold stream-name is-pulled-left">{{stream.name}}</p>
              </div>
              <div class="stream-viewers is-pulled-right"> Viewers (<p class="view-count has-text-grey-lighter">
                {{stream.viewers}}</p>)
              </div>
            </header>
            <div class="stream-card-content">
            <a @click="viewStream(stream)">
				  	  <img class="stream-preview" :src="stream.thumb" width="100%">	
            </a>
            </div>
				    <footer class="card-footer stream-card-footer">
              <div class="stream-footer"> 
                {{stream.title}}
              </div>
              <div class="stream-action"><button class="button is-small is-rounded is-info is-outlined" @click="viewStream(stream.channel)">View</button>
              </div>
				    </footer>
		  	  </div>
        </div>
		  </div>
		  <div class="card" v-else> 
              <header class="card-header">
                <div class="stream-card-info"> 
                <img class="stream-class-icon" > <p class="has-text-danger has-text-weight-semibold stream-name is-pulled-left">{{activeStream.name}}</p>
                </div>
                <div class="stream-viewers is-pulled-right" @click="clearStream"> <a class="has-text-info">Return to streams</a>
                </div>
              </header>
   					<div class="columns card-content is-gapless stream-box">
   						<div class="column is-9 content-stream">
   							    <iframe 
							        :src="'http://player.twitch.tv/?channel=' + viewingId"
							        height="440"
							        width="720" 
							        frameborder="0" 
							        scrolling="no"
							        allowfullscreen="true">
							    </iframe>
   						</div>
   						<div class="column  chat">
   							<iframe 
							        :src="'http://www.twitch.tv/embed/' + viewingId + '/chat'"
							        height="100%" 
							        width="100%" 
							        frameborder="0" 
							        scrolling="no"
							        allowfullscreen="false">
							    </iframe>
   						</div>
   					</div>
                        <footer class="card-footer stream-card-footer">
                    <div class="my-pagination has-text-right">
           <button class="button is-rounded is-info is-outlined" style="margin-right: 10px" title="This is the first page" >Follow</button>
           <button class="button is-rounded is-info is-outlined">Subscribe</button>
          </div>
            </footer>

        </div>
		</div>
	</div>
</template>
<script>
import { stream } from '../middleware/streamHelp';
import axios from 'axios';
export default {
	data () {
		return {
      allowSort: ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'],
			streamers: [],
      activeStreams: [],
			isloading: true,
			streamList: [],
			viewingStream: false,
			viewingId: '',
			activeStream: []
		}
	},
  computed: {
    sortedStreams() {
      console.log(array)
      var array = this.streamList;
      var sort = this.allowSort;
      const filteredResults = array.filter(function(e){
        for(var x = 0; x < sort.length; x++){
        if(e.class == sort[x])
        {
            return true
        }
      }})
      filteredResults.sort(function(a, b) {
        console.log(b)
    return parseFloat(b.viewers) - parseFloat(a.viewers);
});
      console.log(filteredResults)
      return filteredResults
    }
  },
  mixins: [stream],
	methods: {
    refresh(){
      var self = this;
      var cards = document.getElementsByClassName("card");
      for(var i = 0; i < cards.length; i++)
      {
        cards[i].classList.add('hide-card')
      }
      setTimeout(function(){
      self.getNews();
      }, 500);
      
    },
	getNews () {
        var self = this;
        self.isloading = true;
        this.$axios.get('http://localhost:8081/streams/', {})
        .then(function (response) { 
            self.streamList = [];
            self.streamList = response.data;
          for(var g = 0; g < self.streamList.length; g++)
          {
           self.streamers.push(self.streamList[g].channel);
          }  

          self.getTwitchStatus();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    toggleSort(i, event) {
      var button = event.target.id
      console.log(button)
      var index = this.allowSort.indexOf(i);
      if(index > -1)
      {
        document.getElementById(button).classList.add('imgDisabled');
      for(var g = 0; g < this.allowSort.length; g++)
      {
        if(this.allowSort[g] == i)
        {
          
          var index = this.allowSort.indexOf(i);
          if(index !== -1)
          {
            
            this.allowSort.splice(index, 1)
          }
        }
      }
      return
    }
    else
          
          if(index < 0)
          {
            document.getElementById(button).classList.remove('imgDisabled');
            this.allowSort.push(i)
          }
      
    },
    viewStream(id)
    {
    		this.viewingStream = true;
    		this.viewingId = id.channel;
    		this.activeStream = id
    },
    clearStream() {
    		this.viewingStream = false;
        this.activeStream = '';
        this.viewingId = null;
    },
    getTwitchStatus () {
       
         var params = ""
        this.streamers.forEach(function(e){
          params += "user_login=" + e + "&";
        })
        params = params.trim("&");
        var self = this
        delete axios.defaults.headers.common["x-access-token"];
        var twitch = axios.create({
          baseURL: `https://api.twitch.tv/helix/`,
          headers: {
            'Client-ID' : 'clientID'
          }
        });  

        twitch.defaults.headers.common = {};
        twitch.get('streams?' + params,  {})
        .then(function (response) { 
          var stream = response.data.data;
          self.activeStreams.push(response.data)
          for(var i = 0; i < stream.length; i++)
          {
              for(var x = 0; x < self.streamList.length; x++)
              {
                
                if(self.streamList[x].userId == stream[i].user_id)
                {
                  self.streamList[x].thumb = stream[i].thumbnail_url
                  self.streamList[x].thumb = self.streamList[x].thumb.replace("{width}", "320")
                  self.streamList[x].thumb = self.streamList[x].thumb.replace("{height}", "180")
                  self.streamList[x].language = stream[i].language
                  self.streamList[x].game_id = stream[i].game_id
                  self.streamList[x].title = stream[i].title
                  self.streamList[x].live = `Live`
                  self.streamList[x].viewers = stream[i].viewer_count

                }
              }      
	          } 

          self.isloading = false;
          console.log(self.activeStreams) 
          console.log(self.streamList.data )
        })
        .catch(function (error) {
          console.log(error);
        });
          
    },	
	},
	beforeMount() {
		this.getNews();
	}
}
</script>