<template>
  <div>
    <div class="card" v-for="(post, index) in newsList[0]" :key="index">
        <header class="card-header">
              <div class="stream-card-info"> 
                <p class="has-text-danger has-text-weight-semibold stream-name is-pulled-left">{{post.title}}</p>
              </div>

         </header>
        <div class="card-content" v-html="post.content">
        </div>
        <footer class="card-footer stream-card-footer">
              <div class="stream-footer"> 
                {{post.posted}}
              </div>
              <div class="stream-action"><button class="button is-small is-rounded is-info is-outlined">View</button>
              </div>
        </footer>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        newsList: []
      }
    },
    methods: {
        getNews () {
          var self = this;
          this.$axios.get('http://localhost:8081/news/', {})
          .then(function (response) { 
            console.log(response.data);
              self.newsList.push(response.data);
          })
          .catch(function (error) {

            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getNews();
    }
  
  }
</script>
