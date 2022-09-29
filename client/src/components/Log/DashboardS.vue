<template>
    <div>
      <div>
        <h1>arrB</h1>
        <h1>{{arrB[arrB.length-1]}}</h1>
      </div>
        <div class="a">
          <h3>distanceCm</h3>
          <apexchart height="450" type="line" :options="chartOptions" :series="series"/>
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
          categories: []
        }
      },
      series1: [
        {
          name: "WebsiteHits",
          data: []
        },
        {
          name: "WebsiteHits1",
          data: []
        },
        {
          name: "WebsiteHits2",
          data: []
        },
        {
          name: "WebsiteHits3",
          data: []
        }
      ],
      arrA: [],
      arrB: [],
      arrC: [],
      arrD: [],
      arrE: []
        }
    },
    async created() {
        this.logs = (await LogService.index()).data
        for (let i = 0; i < this.logs.length; i++) {
            this.arrA.push(this.logs[i].createdAt);
            this.arrB.push(this.logs[i].distanceCm);
            this.arrC.push(this.logs[i].distanceMm);
            this.arrD.push(this.logs[i].distanceFt);
            this.arrE.push(this.logs[i].distanceInch);
        }
        console.log(this.arrB[this.arrB.length])
        this.series = [
        {
          name: "WebsiteHits",
          data: this.arrB
        },
        {
          name: "WebsiteHits1",
          data: this.arrC
        },
        {
          name: "WebsiteHits2",
          data: this.arrD
        },
        {
          name: "WebsiteHits3",
          data: this.arrE
        }
        ];
        this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: this.arrA,
          },
        },
        };
    },


}
</script>
<style>

</style>