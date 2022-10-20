<template>
    <div>
        <h1>Create User</h1>
        <form v-on:submit.prevent = "createUser">
            <p>username: <input type="text" v-model="user.Username"></p>
            <p>password: <input type="text" v-model="user.Password"></p>
            <p>fullname: <input type="text" v-model="user.fullname"></p>
            <p><button type="submit">create user</button></p>
        </form>
    </div>
</template>
<script>
import LogsService from '@/services/LogsService'

    export default{
        data () {
            return{
                user:{
                    Username: '',
                    Password: '',
                    fullname: '',
                }
            }
        },
        methods:{
            async createUser(){
                try{
                    await LogsService.post(this.user)
                    this.$router.push({
                        name: 'users'
                    })
                } catch (err){
                    console.log(err)
                }
            }
        }
    }

</script>
<style scoped>

</style>