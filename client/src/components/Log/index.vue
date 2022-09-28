<template>
    <div>
        <h1>Gat all logs</h1>
        <div v-if="logs.length">
            <div>จำนวนข้อมูล: {{logs.length}}</div>
            <div>id: {{logs[0].id}}</div>
            <div>feet: {{logs[0].distanceFt}}</div>
            <div>inch: {{logs[0].distanceInch}}</div>
            <div>mm: {{logs[0].distanceMm}}</div>
            <div>cm: {{logs[0].distanceCm}}</div>
            <div>timeC: {{logs[0].createdAt}}</div>
            
        </div>
    </div>
</template>
<script>
import LogService from '@/services/LogsService'
    //create array form json
    export default{
        data () {
            return {
                logs: []
            }
        },
        async created () {
            this.logs = (await LogService.index()).data
            
        },
    }
</script>
<style scoped>
</style>