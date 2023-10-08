<template>
    <div>   

        <div v-for="item in jobList" :key="item.id"  class=" bg-neutral-lightGrayishCyan my-12  " id="dataContainer mx-96" >
            <!-- first card-->
            <div class=" flex flex-col pl-10 py-8 my-12 w-full  rounded-md bg-white md:flex-row md:justify-between shadow-lg border-primary">
            <!--left column-->
            <div class="flex flex-col md:flex-row">
                <!--image of job-->
                <div class="mr-2 rounded-full -mt-14 w-16 md:mt-0 md:w-24"> 
                <img src="./images/photosnap.svg" alt="photoshnap">
                </div>
                <!--job description-->
                <div class="flex flex-col">
                <!--company title and tags-->
                <div class="flex items-center">
                    <div class="mr-1">
                    <h3 class="text-primary  font-bold mr-4 text-lg md:text-lg">{{ item.company }}</h3>
                    </div>
                    <div class="flex flex-wrap">
                    <span v-show="item.isnew"  class="bg-primary bg-primary-desaturatedDarkCyan uppercase text-white font-bold rounded-full px-4 pt-2 pb-1 text-sm mr-2">New</span>
                    <span v-show="item.featured" class="bg-secondary  uppercase text-white font-bold rounded-full px-4 pt-2 pb-1 text-sm mr-2">FEATURED</span>
                    </div>
                </div>
                <!--job title-->
                <div class="-ml-2">
                    <h2 class="font-sans  font-bold  hover:text-primary px-2 py-1 rounded-xl text-xl self-start">{{ item.position }}</h2>
                </div>
                <!--date time and location-->
                <div class="flex gap-2 text-neutral-darkGrayishCyan items-center">
                    <span>1d ago</span>
                    <span class="pb-2">.</span>
                    <span>{{ item.contract }}</span>
                    <span class="pb-2">.</span>
                    <span>{{ item.location }}</span>
                </div>
                </div>
                <div class=" py-3 mb-2 md:hidden">
                <hr class="bg-neutral-darkGrayishCyan">
                </div>
            </div>
            <!--right column-->
            <div  class="flex justify-start flex-wrap items-center  md:flex-wrap'">
                <div v-for="skill in item.languages" class="felx ">
                <span class="font-bold text-primary bg-neutral-lightGrayishCyan px-2 pt-2 pb-1 mr-4 rounded-md cursor-pointer hover:text-white hover:bg-primary" >{{ skill }}</span>
                <!-- <span class="font-bold text-primary bg-neutral-lightGrayishCyan px-2 pt-2 pb-1 mr-4 rounded-md cursor-pointer hover:text-white hover:bg-primary" >Senior</span>
                <span class="font-bold text-primary bg-neutral-lightGrayishCyan px-2 pt-2 pb-1 mr-4  rounded-md cursor-pointer hover:text-white hover:bg-primary " >HTML</span>
                <span class="font-bold text-primary bg-neutral-lightGrayishCyan px-2 pt-2 pb-1 mr-4  rounded-md cursor-pointer hover:text-white hover:bg-primary" >Javascript</span> -->
                </div>
            </div>
            </div>
        </div>

        

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'jobListing',
        data() {
            return {
                jobList: [],
                test: false
            }
        },
        methods: {
             getPosts() {
               axios
               .get('http://localhost:8001/api/jobs/') 
               .then((Response) =>{
                console.log(Response.data.job)
                this.jobList = Response.data.job
               })
               .catch((error) =>{
                console.log(error)
               })
            },
            convertStringToBoolean(inputString) {
                const lowerCaseStr = inputString.trim().toLowerCase();

                if (lowerCaseStr === "true") {
                    return true
                } else{
                    return false
                }
    }
        },
        created(){
           this.getPosts()
        }

    }
</script>

<style lang="scss" scoped>

</style>