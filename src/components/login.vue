<template>
    <div class=" flex justify-center items-center h-screen">
        <div class="flex flex-col items-center justify-center  bg-gradient-to-t from-gradiantFrom to-gradiantTo h-1/3 py-48  rounded-2xl"  >
            <img src="src\assets\MMCYTech.png" alt=" company logo" class="w-1/2">
            <h2 class="text-secondary text-2xl font-sans font-midium pt-4" >Login</h2>
            <Form class="w-full px-12 pt-4 pb-4">
                <label for="username" class="text-secondary text-sm font-sans font-medium">User Name</label>
                <br>
                <input type="text" id="username " class="w-full rounded-md py-1 px-2 focus:outline-none focus:border-2 ">
                <br>
                <label for="password" class="text-secondary text-sm font-sans  font-medium">Password</label>
                <br>
                <input type="text"  id="password" class="w-full rounded-md py-1 px-2 focus:outline-none focus:border-2 ">
                <br>
                <button class="w-full mt-12 bg-primary text-white text-lg font-sans py-2 rounded-md font-medium" >Sign in</button>
            </Form>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return{
                formValues: {
                    userName: '',
                    password: '',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>