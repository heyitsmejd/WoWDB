<template>
  <div class="header-container">
    <nav class="navbar top-menu" role="navigation" aria-label="dropdown navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/images/hlogo.png" >
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="burgerVisible = !burgerVisible">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>  
      <div class="navbar-menu" :class="{ 'is-active': burgerVisible }">
        
     
       <a class="navbar-item" href="/">
          News
       </a>
       <a class="navbar-item" href="/">
          Database
       </a>
       <a class="navbar-item" href="/talents">
          Talents
       </a>
       <a class="navbar-item" href="/guilds">
          Guilds
       </a>
      <div class="navbar-item has-dropdown is-hoverable">
       
        <a class="navbar-link navbar-item" href="/guides">
          Guides
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Classes
          </a>

          <a class="navbar-item">
            PvE
          </a>
          <a class="navbar-item">
            PvP
          </a>
          <a class="navbar-item">
            Reputation
          </a>
          <a class="navbar-item">
            Misc
          </a>
        </div>
      </div>
      <a class="navbar-item active" href="/streams">
          Streams
      </a>
      <a class="navbar-item" href="/friends">
          Find A Friend
      </a>
    </div>
    <div class="navbar-item p-r-0">
      <div class="control has-icons-right">
        <input class="input is-rounded is-fullwidth" type="text" placeholder="Search">
          <span class="icon is-small is-right">
            <i class="fas fa-search"></i>
          </span>
      </div>
    </div>
    <div class="navbar-item navbar-end user-menu">
      <div class="user-pane-top">
        <img class="profile-icon" src="/images/icons/profile.png">
          <div class="navbar-item has-dropdown is-hoverable" v-if="$auth.user">
            <a class="navbar-link navbar-item">
              {{ user }}
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Account
              </a>

              <a class="navbar-item">
                Settings
              </a>
              <a class="navbar-item">
                Lists
              </a>
              <a class="navbar-item">
                Help
              </a>
              <a class="navbar-item" @click="$auth.logout()">
                Logout
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable" v-else>
            <a class="navbar-link navbar-item" >
              Have an account? Log in
            </a>
            <div class="navbar-dropdown">
              <Login/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Login from '~/components/Login.vue'
  export default {

  middleware: ['auth'],
      data() {
    return {
      sidebarVisible: true,
      burgerVisible: false,
    }
  },
  components: {
    Login
  },
  computed: {
    user () { 
      console.log(this.$auth)
      return this.$auth.user }
  },
  methods: {
        toggleSide() {
      if(this.sidebarVisible)
      {
        this.sidebarVisible = false
       document.getElementById('sidebar').classList.add('closed');
       document.getElementById('content').classList.add('content-full');
      }
      else
      {
        this.sidebarVisible = true
        document.getElementById('sidebar').classList.remove('closed');
        document.getElementById('content').classList.remove('content-full');
      }
    },
    logOut () {
  this.$store.dispatch('auth/reset').then(() => {
    this.$router.push('/')
  })
}
  }
}
</script>