<template>
    <div>
        <h1>Edit User</h1>
        <form v-on:submit.prevent = "editUser">
            <p>username: <input type="text" v-model="user.Username"></p>
            <p>password: <input type="text" v-model="user.Password"></p>
            <p>fullname: <input type="text" v-model="user.fullname"></p>
            <p><button type="submit">edit user</button></p>
        </form>
        <div>
            <p>username: {{user.Username}}</p>
            <p>password: {{user.Password}}</p>
            <p>fullname: {{user.fullname}}</p>
        </div>
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
            async editUser(){
                try{
                    await LogsService.put(this.user)
                    this.$router.push({
                        name: 'users'
                    })
                }catch(err){
                    console.log(err)
                }
            }
        },
        async created (){
            try{
                let userId = this.$route.params.userId
                this.user = (await LogsService.show(userId)).data
            }catch(error){
                console.log (error)
            }
        }
    }

</script>
<style scoped>

</style>