<template>
    <div class=" flex justify-center items-center h-screen">
        <div class="flex flex-col items-center justify-center  bg-slate-400 h-1/3" >
            <img src="src\assets\MMCYTech.png" alt=" company logo" class="w-1/2">
            <Form class="w-full px-12">
                <label for="username">User Name</label>
                <br>
                <input type="text" id="username " class="w-full">
                <br>
                <label for="password">Password</label>
                <br>
                <input type="text"  id="password" class="w-full">
                <br>
                <button class="w-full mt-12 bg-white">login</button>
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