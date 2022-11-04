<template>
    <div>
        <h1>เข้าสู่ระบบการติดตามการทำงานของอินเวอร์เตอร์</h1>
        <h1>User Login</h1>
        <form v-on:submit.prevent="onLogin">
            <p>Username: <input type="text" v-model="Username" /></p>
            <p>Password: <input type="password" v-model="Password" /></p>
            <p><button type="submit">Login</button></p>
        </form>
    </div>
</template>
<script>
import AuthenService from '@/services/AuthenService'
export default {
    data() {
        return {
            Username: '',
            Password: ''
        }
    },
    methods: {
        async onLogin() {
            try {
                const response = await AuthenService.login({
                    Username: this.Username,
                    Password: this.Password
                })
                this.$router.push({path: 'indexU/'+response.data.user.id})
                console.log(response.data.user.id)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>