<template>
<div class="is-centered has-text-centered login-form">
                        <p>Need an account? Register</p>
                  <!-- <div class="notification m-t-1" :class="alertType" v-if="alert">
                    {{ alert.message }}
                  </div> -->
                  <form v-on:submit.prevent="login">
                  <div class="field m-t-1">
                    <div class="control">
                      <input class="input" type="text" v-model="username" placeholder="Username">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input class="input" type="password" v-model="password" placeholder="Password">
                    </div>
                  </div>
                    
                  <div class="field m-t-1">
                    <div class="control">
                      <button class="button is-info is-fullwidth"  id="loginBtn" @click="login">Login</button>
                      </div>
                    </div>
                    </form>
  </div>

 
</template>

<script>
export default {
  computed: {
    user () { return this.$store.state.auth ? this.$store.state.auth.user : null }
  },
  data () {
    return {
      username: '',
      password: '',
      email: '',
      alert: null,
      alertType: null,
      loading: false,
      loginModal: false
    }
  },
  methods: {
    toggleModal () {
      this.loginModal = !this.loginModal;
    },
    logOut () {
  this.$store.dispatch('auth/reset').then(() => {
    this.$router.push('/login')
  }) },
    login () {
         var loginButton = document.getElementById('loginBtn');
        loginButton.classList.add('is-loading');
        var self = this;
  this.alert = null
  this.loading = true
  this.$store.dispatch('auth/login', {
    username: self.username,
    password: self.password
  }).then(result => {
    this.alert = {type: 'success', message: result.data.message}
    this.alertType = 'is-success'
    this.loading = false
    loginButton.classList.remove('is-loading')
    self.$router.push('/')
    
  }).catch(error => {
    console.log(error)
    this.loading = false
    if (error.response && error.response.data) {
      this.alertType = 'is-danger'
      
      this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
       loginButton.classList.remove('is-loading');
    }
  })

    }
  }
}
</script>

<style>
  .login-form {
    padding:1.5rem;
  }
</style>