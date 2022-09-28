<template>
    <div>
        <div>{{arrA}}</div>
        <div>{{arrB}}</div>
        <div class="a">
          <h3>distanceCm</h3>
          <apexchart height="200" type="area" :options="chartOptions" :series="series"/>
        </div>
    </div>

</template>
<script>
import LogService from '@/services/LogsService'

export default {
    name: 'hello',
    data:function () {
        return {
            chartOptions: {
        xaxis: {
          type: "datetime",
          categories: [
            "2019-01-01",
            "2019-02-01",
            "2019-03-01",
            "2019-04-01",
            "2019-05-01",
            "2019-06-01",
            "2019-07-01"
          ]
        }
      },
      series: [
        {
          name: "WebsiteHits",
          data: [15, 20, 21, 25, 60, 120, 93]
        }
      ],
      arrA: [],
      arrB: []
        }
    },
    async created() {
        this.logs = (await LogService.index()).data
        for (let i = 0; i < this.logs.length; i++) {
            this.arrA.push(this.logs[i].createdAt);
            this.arrB.push(this.logs[i].distanceCm);
        }
        console.log(chartOptions)
        console.log(series)
    },


}
</script>
<style>

</style>