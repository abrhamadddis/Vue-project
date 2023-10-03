<template>
  <router-view />
</template>

<script>
  // import login from './components/login.vue'
  // import login from './components/login.vue';

  import login from './components/login.vue';

  export default {
    name:'App',
    components: {
      login,
    }
    
  }
</script>

<style lang="scss" scoped>

</style>