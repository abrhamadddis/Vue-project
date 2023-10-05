<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/jobList">jobList</router-link>
        <RouterLink to="/login">login</RouterLink>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router';
    
    export default {
        name: 'navBar',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>