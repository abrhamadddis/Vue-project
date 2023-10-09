<template>
    <div class=" flex justfify-center  w-full  pt-4">
        <div class="flex w-1/2 justify-evenly">
            <router-link class="text-secondary text-xl font-sans font-medium  py-1 px-2 hover:text-primary rounded-md" to="/">Home</router-link>
            
            <router-link class="text-secondary text-xl font-sans font-medium   py-1 px-2 hover:text-primary rounded-md" to="/jobs">Job List</router-link>
            
            <RouterLink v-show="!userLoggedinLoggedOut" class="text-secondary text-xl font-sans font-medium border-x-2 border-r-8 border-y-4  py-1 px-2 hover:text-primary rounded-md" to="/login">LogIn</RouterLink>
            
            <RouterLink v-show="userLoggedinLoggedOut"   @click="logOutUser" class="text-secondary text-xl font-sans font-medium border-x-2 border-r-8 border-y-4  py-1 px-2 hover:text-primary rounded-md" to="/">LogOut</RouterLink>
            
        </div>
        

    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from '../stores/useAuth';

    
    export default {
        name: 'navBar',
        data() {
            return {
                isAuthenticated: false

            }
        },
        methods: {
            logOutUser() {
                const authStore = useAuthStore()
                authStore.logOut()
            }
               
        },
        computed: {
            userLoggedinLoggedOut(){
                const authStore = useAuthStore()
                return authStore.isAuthenticated
            }
        }


    }
</script>

<style lang="scss" scoped>

</style>