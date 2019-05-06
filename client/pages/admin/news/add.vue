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
                  <a class="button is-info is-pulled-right">Add New Post</a>
                  <div class="is-clearfix"></div>
                  <br>
                  <input class="input" type="text" v-model="title" placeholder="Post Title">
                  <hr>
                  <wysiwyg v-model="content" />
                </div>
                <div class="column is-offset-1">
                  
                  <div class="field">
                    <label class="checkbox">
                      <input type="checkbox">
                          Is the post visible?
                      </label>
                  </div>
                  <div class="field">
                    Posted by: Author
                  </div>
                  <div class="field">
                    Posted on: 12/1/2018
                  </div>
                  <div class="field">
                    Updated on: 12/15/2018
                  </div>
                  <div class="field">
                    <a class="button is-success" @click="submitPost">Save</a>
                  </div>
                  <div class="field">
                    <a class="button is-danger">Delete</a>
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
import AdminNav from '~/components/AdminNav.vue'
import AdminSidebar from '~/components/AdminSidebar.vue'
import News from '~/components/News.vue'
export default {
  components: {
    AdminNav,
    AdminSidebar,
    News
  },
  data() {
    return {
      author: 'Jim',
      posted: '',
      updated: '',
      title: '',
      content: '',
      visible: 1
    }
  },
  methods: {
    submitPost () {
        var self = this;
        this.posted = new Date().toLocaleString();
        this.$axios.post('http://localhost:8081/news/add', {content: self.content, title: self.title, visible: self.visible, author: self.author, posted: this.posted})
        .then(function (response) { 
            self.$nuxt.$router.replace({ path: '/admin/news' });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deletePost() {

    }
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