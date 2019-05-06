<template>
<div>
  <div class="flex-container flex-column header-margin">
    <div class="header">
      <TopMenu/>
    </div>
  </div>
  <div class="flex-container flex-center ">

    <div class="main-content header-margin"> 
          <div class="banner">  
    Banner goes here.</div>
    <div class="columns">
    <div class="column is-two-thirds content-area">
      <news/>
    </div>
    <div class="column sidebar-area">
      <sidebarRight/>
    </div>
  </div> </div> </div>
</div>
</template>

<script>
import TopMenu from '~/components/TopMenu.vue'
import News from '~/components/News.vue'
import sidebarRight from '~/components/streamSide.vue'
export default {
  auth: false,
  components: {
    TopMenu,
    News,
    sidebarRight
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
