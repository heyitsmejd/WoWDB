<template>
  <section class="container">
    <div >
      
      <h1 class="title">
        wowdb
      </h1>
      <h5 class="subtitle is-size-5">
        A classic world of warcraft database
      </h5>
      <div>
      </div>
       <TopMenu/>
      <app-logo/>
      <Map/>

    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import TopMenu from '~/components/TopMenu.vue'
import Map from '~/components/Map.vue'
export default {
  components: {
    AppLogo,
    Map,
    TopMenu
  },
  data() {
    isloading: true
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