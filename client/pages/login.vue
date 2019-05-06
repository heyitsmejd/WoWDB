<template>
<div class="columns is-centered has-text-centered">
  <div class="column is-one-quarter login-screen">
                        <p>Please login</p>
                                          <div class="notification m-t-1" :class="alertType" v-if="alert">
                    {{ alert.message }}
                  </div>
                  <div class="field m-t-2">
                    <div class="control">
                      <input class="input" type="text" v-model="username" placeholder="Username">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input class="input" type="password" v-model="password" placeholder="Password">
                    </div>
                  </div>
                    
                  <div class="field m-t-2">
                    <div class="control">
                      <button class="button is-info is-fullwidth"  id="loginBtn" @click="login">Login</button>
                      <button class="button is-info is-fullwidth"  id="loginBtn"  @click="$auth.fetchUser()">Fetch User</button>
                      </div>
                    </div>
  </div>

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
    async login() {
      this.error = null
      return this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .catch(e => {
          this.error = e + ''
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