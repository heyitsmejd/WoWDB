<template>
  <section>
    <div class="login-screen is-centered">
      
    <div class="columns is-centered">

        <div class="column is-3">
              <div>
                <div class="field has-text-centered">
                  <p>Please login</p>
                </div>
                <div class="field">
                  <div class="control">
                    <input class="input" type="text" v-model="username" placeholder="Username">
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input class="input" type="password" v-model="password" placeholder="Password">
                  </div>
                </div>
                  
                  <div class="field">
                    <p v-if="user">Hello, {{user.username}} </p>
                  </div>
                <div class="field">
                  <div class="control">
                    <button class="button is-info is-fullwidth"  id="loginBtn" @click="login">Login</button>
                    
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
    AdminSidebar
  },
  computed: {
    user () { return this.$store.state.auth ? this.$store.state.auth.user : null }
  },
  data () {
    return {
      username: '',
      password: '',
      email: '',
      alert: null,
      loading: false
    }
  },
  methods: {
    logOut () {
  this.$store.dispatch('auth/reset').then(() => {
    this.$router.push('/admin/login')
  }) },
    login () {
        // console.log(this.username);
        // var loginButton = document.getElementById('loginBtn');
        // loginButton.classList.add('is-loading');
        // var self = this;
        // this.$axios.post('http://localhost:8081/login', {username : self.username, password : self.password})
        // .then(function (response) { 
        //   console.log(response.data);
        //    loginButton.classList.remove('is-loading');
        // })
        // .catch(function (error) {
        //   loginButton.classList.remove('is-loading');
        //   console.log(error);
        // });
        var self = this;
  this.alert = null
  this.loading = true
  this.$store.dispatch('auth/login', {
    username: self.username,
    password: self.password
  }).then(result => {
    this.alert = {type: 'success', message: result.data.message}
    this.loading = false
    this.$router.push('/admin/login')
  }).catch(error => {
    console.log(error)
    this.loading = false
    if (error.response && error.response.data) {
     // this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
    }
  })

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