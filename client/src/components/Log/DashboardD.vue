<template>
  <div>
    <div id="chart">
      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>
<script>
import LogService from '@/services/LogsService'
export default {
  name: "home",
  data:function (){
    return {
      Pac: [],
      Date: [],
      series: [{
              name: "Desktops",
              data: []
          }],
          chartOptions: {
            xaxis: {
              categories: [],
            }
          },
          
    }
  },
  mounted: function () {
    
  },
  async created() {
    this.logs = (await LogService.index()).data
    for (let i = 0; i < this.logs.length; i++) {
      this.Pac.push(this.logs[i].Pac_W)
      this.Date.push(this.logs[i].updatedAt)
    }
    this.series = [
      {
        name: "Desktops",
        data: this.Pac
      },
    ];
    this.chartOptions = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.Date,
        },
      },
    };
  }
}
</script>
<style scoped>

</style>
