<template>
    <div>
        <h1>Show User</h1>
        <p>id: {{user.id}}</p>
        <p>Username: {{user.Username}}</p>
        <p>Password: {{user.Password}}</p>
        <p>Fullname: {{user.fullname}}</p>
    </div>
</template>
<script>
import LogsService from '@/services/LogsService'
    export default{
        data () {
            return {
                user:{}
            }
        },
        async created () {
            let userId = this.$route.params.userId
            this.user = (await LogsService.show(userId)).data
        }
    }

</script>
<style scoped>

</style>