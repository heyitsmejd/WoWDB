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
              <div class="columns is-centered">
                <div class="column is-two-thirds">
                  <a class="is-pulled-left" href="/admin/news/"> Back to posts</a>
                  <a class="button is-info is-pulled-right" @click="getUserId">Add New Post</a>
                  <div class="is-clearfix"></div>
                  <br>
                  <div class="field"> 
                      <input class="input" type="text" v-model="name" placeholder="Streamer Name">
                  </div>
                  <div class="field"> 
                      <input class="input" type="text" v-model="tags" placeholder="Tags">
                  </div>
                  <div class="field"> 
                     <div class="select">
                        <select v-model="playerClass">
                          <option>Druid</option>
                          <option>Hunter</option>
                          <option>Mage</option>
                          <option>Paladin</option>
                          <option>Priest</option>
                          <option>Rogue</option>
                          <option>Shaman</option>
                          <option>Warlock</option>
                          <option>Warrior</option>
                        </select>
                      </div>
                  </div>
                  <div class="field"> 
                      <div class="select">
                        <select v-model="platform">
                          <option selected>Twitch</option>
                          <option>Youtube</option>
                        </select>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import AdminNav from '~/components/AdminNav.vue'
import AdminSidebar from '~/components/AdminSidebar.vue'
export default {
  components: {
    AdminNav,
    AdminSidebar
  },
  data() {
    return {
      name: '',
      channel: '',
      platform: 'Twitch',
      tags: '',
      userId: '',
      playerClass: 'Druid'
    }
  },
  methods: {
    getUserId() {
      var self = this;
        var twitch = axios.create({
          baseURL: `https://api.twitch.tv/helix/`,
          headers: {
            'Client-ID' : '0p62yoxhxas17hm0hk2eggtmz286gi'
          }
        });  
        delete axios.defaults.headers.common["x-access-token"];
        twitch.defaults.headers.common = {};
        twitch.get('users?login=' + this.name,  {})
        .then(function (response) { 
          console.log(response.data)
          self.userId = response.data.data[0].id;
          self.submitPost();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    submitPost () {
        var self = this;
        this.$axios.post('http://localhost:8081/streams/add', {name: self.name, channel: self.name, platform: self.platform, tags: self.tags, userId: self.userId, class: self.playerClass})
        .then(function (response) { 
            self.$nuxt.$router.replace({ path: '/admin/streams' });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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