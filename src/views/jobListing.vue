<template>
    <div>   
        <h1>jobListing page</h1>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'jobListing',
        data() {
            return {
                jobList: [],
            }
        },
        methods: {
            getPosts() {
               axios
               .get('http://localhost:8001/api/jobs/') 
               .then((Response) =>{
                console.log(Response.data)
                this.jobList = Response.data
               })
               .catch((error) =>{
                console.log(error)
               })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>