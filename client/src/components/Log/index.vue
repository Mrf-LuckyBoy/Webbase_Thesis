<template>
    <div>
        <h1>หน้าจัดการการเพิ่มลบแก้ไขข้อมูลผู้ใช้งาน</h1>
        <div>จำนวนผู้ใช้งาน: {{users.length}}</div>
        <p><button v-on:click="navigateTo('/user/create')">สร้างผู้ใช้งาน</button></p>
            <div v-for="user in users" v-bind:key="user.id">
            <p>id: {{user.id}}</p>
            <p>Username: {{user.Username}}</p>
            <p>Password: {{user.Password}}</p>
            <p>Fullname: {{user.fullname}}</p>
            <p><button v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูลผู้ใช้</button> 
                <button v-on:click="navigateTo('/user/edit/'+user.id)">แก้ไขข้อมูลผู้ใช้</button>
                <button v-on:click="deleteUser(user)">ลบข้อมูลผู้ใช้</button>
            </p>
            <hr>
        </div>
    </div>
</template>
<script>
import LogService from '@/services/LogsService'
import LogsService from '../../services/LogsService'
    //create array form json
    export default{
        data () {
            return {
                users: []
            }
        },
        async created () {
            this.users = (await LogService.indexUser()).data
        },
        methods:{
            navigateTo(route) {
                this.$router.push(route)
            },
            async deleteUser (user) {
                let result = confirm("ต้องการที่จะลบใช่ไหม")
                if (result) {
                    try {
                        await LogsService.delete(user)
                        this.refreshData()
                    } catch (err) {
                        console.log(err)
                    }
                }
            },
            async refreshData() {
                this.users = (await LogsService.indexUser()).data
            }
        }
    }
</script>
<style scoped>
</style>