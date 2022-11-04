<template>
    <div>
        <h1>ระบบติดตามการทำงานของอินเวอร์เตอร์(owner)</h1>
        <p><button v-on:click="navigateTo('/users')">เพิ่มลดแก้ไขข้อมูลผู้ใช้งาน</button> 
            <button v-on:click="navigateTo('/Log/DashboardS')">ติดตามการทำงานของอินเวอร์เตอร์</button>
        </p>
    </div>
</template>
<script>
    export default{
        methods:{
            navigateTo(route) {
                this.$router.push(route)
            },
        }
    }
</script>
<style scoped>
</style>
