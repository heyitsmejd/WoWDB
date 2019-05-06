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
              <a class="button is-info" href="/admin/news/add">Add New Post</a>
            </div>
             <div class="notification is-info" v-if="alert">
              <div v-html="alert"></div>
              <button class="delete" @click="alert = null"></button>
              
            </div> 
            <table class="table is-fullwidth">
              <th>Title</th>
              <th>Category</th>
              <th>Posted</th>
              <th>Updated</th>
              <th>Visible</th>
              <th>Actions</th>
              <tr v-for="(post, index) in newsList[0]" :key="index">
                <td>{{ post.title }}</td>
                <td>{{ post.category}}</td>
                <td>{{ post.posted }}</td>
                <td>{{ post.updated }}</td>
                <td>{{post.visible}}</td>
                <td><a class="button is-small is-success" :href="'/admin/news/' + post.id">Edit</a><a class="button is-small is-warning ml-10">hide</a><a class="button is-small is-danger ml-10" @click="deletePost(post.id, post.title)">Delete</a></td>
              </tr>
            </table>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
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
      newsList: [],
            alert: null,
      alertType: null,
      delPostTitle: null
    }
  },
  methods: {
    getNews () {

        var self = this;
        this.$axios.get('http://localhost:8081/news/', {})
        .then(function (response) { 
          console.log(response.data);
            self.newsList = [];
            self.newsList.push(response.data);
            console.log(self.newsList)
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