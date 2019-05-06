<template>
	<div>
		<div class="is-pulled-right" v-if="user">
			Username: {{ user.username }}
		</div>
	</div>
</template>
<script>
export default {
	computed: {
    user () { return this.$store.state.auth ? this.$store.state.auth.user : null }
  },
  beforeMount() {

  }
}


</script>