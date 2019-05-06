<template>
  <section>
    <div class="columns admin-navbar">
        <div class="column is-2 has-text-centered is-centered">
           WoWDb
        </div>
        <div class="column">
           <AdminNav/>
        </div>
    </div>
    <div class="columns">
        <div class="column is-2 admin-sidebar">
            <AdminSidebar/>
        </div>
        <div class="column">
          <div class="admin-content">
            <div class="admin-actionarea">
              <a class="button is-info" href="/admin/streams/add">Add Streamer</a>
              <a class="has-text-primary is-size-4 is-pulled-right" @click="getNews()">
                <div v-if="isLoading"><a class="button is-primary is-loading"><span class="icon"><i class=" fas fa-sync-alt"></i></span></a></div>
                <div v-else>
                 <a class="button is-primary "><span class="icon"><i class=" fas fa-sync-alt"></i></span></a>
                </div>
              </a>
            </div>
             <div class="notification is-info" v-if="alert">
              <div v-html="alert"></div>
              <button class="delete" @click="alert = null"></button>
              
            </div> 
            <table class="table is-fullwidth">
              <th>Name</th>
              <th>Tags</th>
              <th>Viewers</th>
              <th>Live</th>
              <th>Actions</th>
              <tr v-for="(stream, index) in streamList" :key="index.id">
                <td>{{ stream.name }}</td>
                <td>{{ stream.tags}}</td>
                <td>{{ stream.viewers }}</td>
                <td v-if="stream.live == 'Live'"><a class="has-text-weight-semibold has-text-primary" :href="'https://twitch.tv/' + stream.name">Live</a></td>
                <td v-else>Offline</td>
                <td><a class="button is-small is-success" :href="'/admin/stream/' + stream.id">Edit</a><a class="button is-small is-danger ml-10" @click="deleteStream(stream.id)">Delete</a></td>
              </tr>
            </table>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import AdminNav from '~/components/AdminNav.vue'
import AdminSidebar from '~/components/AdminSidebar.vue'
import News from '~/components/News.vue'
export default {
  components: {
    AdminNav,
    AdminSidebar,
    News
  },
  data () {
    return {
      streamList: [],
      streamers: [],
      alert: null,
      alertType: null,
      delPostTitle: null,
      isLoading: false
    }
  },
  methods: {
    getNews () {
        var self = this;
        this.$axios.get('http://localhost:8081/streams/', {})
        .then(function (response) { 
          //console.log(response.data);
            self.streamList = [];
            self.streamList = response.data;
            console.log(self.streamList)

          console.log(self.streamers)
          for(var g = 0; g < self.streamList.length; g++)
          {
           self.streamers.push(self.streamList[g].channel);
          }  

          self.getTwitchStatus();
         //   console.log(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getTwitchStatus () {
        this.isLoading = true;
         var params = ""
        this.streamers.forEach(function(e){
          params += "user_login=" + e + "&";
        })
        params = params.trim("&");
        console.log(params)
        var self = this
        delete axios.defaults.headers.common["x-access-token"];
        var twitch = axios.create({
          baseURL: `https://api.twitch.tv/helix/`,
          headers: {
            'Client-ID' : '0p62yoxhxas17hm0hk2eggtmz286gi'
          }
        });  

        twitch.defaults.headers.common = {};
        twitch.get('streams?' + params,  {})
        .then(function (response) { 
          var stream = response.data.data;
          console.log(stream)
          for(var i = 0; i < stream.length; i++)
          {
              for(var x = 0; x < self.streamList.length; x++)
              {
                if(self.streamList[x].userId == stream[i].user_id)
                {
                  self.streamList[x].live = `Live`
                  self.streamList[x].viewers = stream[i].viewer_count
                }
              }

          }  
           self.isLoading = false; 
        })
        .catch(function (error) {
          console.log(error);
        });
          
    },
    deletePost(entry, title) {
        var self = this;
        this.$axios.post('http://localhost:8081/news/delete', {id: entry})
        .then(function (response) { 
          console.log(response)
            self.delPostTitle = title;
            self.alert = '<p class="has-text-warning is-pulled-left">' + self.delPostTitle + '</p> ' + " &nbsp" + response.data.message;
            self.alertType = response.data.type;
            self.getNews();
        })
        .catch(function (error) {
                    if(error.response && error.response.data)
            {
              self.$router.push('/login');
            }
          console.log(error);
        });
    },
    findPost(object, entry){
      for(let i = 0; i< object.length; i++)
      {
        for(var prop in object[i])
        {
          console.log(prop + ' : ' + object[prop])
          if(prop == 'id')
          {
            if(object[prop] == entry)
            {
              console.log('found ' + object)
              return object
            }
          }
          // if(prop['id'] == entry) 
          // {
          //   console.log('found ' + object)
          //   return object
          // }
          // else
          //   console.log('no')
        }
      }
    }
  },
  beforeMount() {
    this.getNews();
    
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>