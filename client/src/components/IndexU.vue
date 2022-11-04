<template>
    <div>
        <h1>ระบบติดตามการทำงานของอินเวอร์เตอร์(user)</h1>
        <p><button v-on:click="navigateTo('/user/edit/'+userId)">แก้ไขข้อมูลผู้ใช้งาน</button> 
            <button v-on:click="navigateTo('/Log/DashboardS')">ติดตามการทำงานของอินเวอร์เตอร์</button>
        </p>
    </div>
</template>
<script>
    export default{
        date (){
            return {
                userId: 0
            }
        },
        async created () {
            this.userId = this.$route.params.userId
            console.log(userId)
        },
        methods:{
            navigateTo(route) {
                this.$router.push(route)
            },
        },
    }
</script>
<style scoped>
</style>
