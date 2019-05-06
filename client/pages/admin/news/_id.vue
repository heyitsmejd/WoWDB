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
                  <div class="field">
                    <label class="label">Title</label>
                  <input class="input" type="text" v-model="title" >
                  </div>
                  <div class="field">
                    <label class="label">Category</label>
                    <input class="input" type="text" v-model="category" >

                  </div>
                  <hr>
                  <div id="editor" >
                    <label class="label">Content</label>
                    <wysiwyg v-model="content" />
                  </div>
                </div>
                <div class="column is-offset-1">
                  
                  <div class="field">
                  Post Visible: {{ postInfo.visible }}
                  </div>
                  <div class="field">
                    Posted by: {{ postInfo.author }}
                  </div>
                  <div class="field">
                    Posted on: {{ postInfo.posted }}
                  </div>
                  <div class="field">
                    Updated on: {{ postInfo.updated }}
                  </div>
                  <div class="field">
                    <a class="button is-success" @click="submitPost">Save</a>
                  </div>
                  <div class="field">
                    <a class="button is-danger" @click="deletePost(postInfo.id)">Delete</a>
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
      postInfo: [],
      title: '',
      content: '',
      category: 'test',
      updated: '',
      visible: false
    }
  },

  methods: {

    getPost () {
        var self = this;
        this.posted = new Date().toLocaleString();
        this.$axios.post('http://localhost:8081/news/get', {id: this.$route.params.id})
        .then(function (response) { 
            self.postInfo = response.data[0];
            self.title = self.postInfo.title;
            self.visible = self.postInfo.visible;
            self.content = self.postInfo.content;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
        deletePost(entry) {
        var self = this;
        this.$axios.post('http://localhost:8081/news/delete', {id: entry})
        .then(function (response) { 
          self.$router.push('/admin/news');
        })
        .catch(function (error) {
                    if(error.response && error.response.data)
            {
              self.$router.push('/admin/news');
            }
          console.log(error);
        });
    },
    submitPost () {
        var self = this;
        var postId = this.postInfo.id;
        let posted = new Date().toISOString();
        this.$axios.post('http://localhost:8081/news/edit', {id: postId, content: self.content, title: self.title, visible: self.visible, category: self.category, updated: posted})
        .then(function (response) { 
            self.$nuxt.$router.replace({ path: '/admin/news' });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getPost();
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