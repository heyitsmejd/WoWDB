<template>
  <div>
  <div class="flex-container flex-column header-margin">
    <div class="header">
      <TopMenu/>
    </div>
  </div>
  <div class="flex-container flex-center">
    <div class="main-content" id="content">  
      <Streams/>
    </div>
  </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import TopMenu from '~/components/TopMenu.vue'
import Streams from '~/components/Streams.vue'
import sidebar from '~/components/sidebarDb.vue'
export default {
  auth: false,
  data() {
    return {
      
    }
  },
  components: {
    AppLogo,
    TopMenu,
    Streams,
    sidebar
  },
  methods: {

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