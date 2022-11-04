<template>
    <div>
        <h1>เข้าสู่ระบบการติดตามการทำงานของอินเวอร์เตอร์</h1>
        <h1>Login Admin</h1>
        <form v-on:submit.prevent="onLogin">
            <p>Username: <input type="text" v-model="Username" /></p>
            <p>Password: <input type="password" v-model="Password" /></p>
            <p><button type="submit">Login</button></p>
        </form>
    </div>
</template>
<script>
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
                    if(this.Username == "Admin" && this.Password == "5555"){
                        this.$router.push({name: 'indexA'})
                    }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>