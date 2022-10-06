<template>
  <div>
    <div id="chart">
      <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>
<script>
import LogService from '@/services/LogsService'
export default {
  name: 'hello123',
  data: function(){
    return{
      
      series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
          },
    }
  }
}
</script>
<style scoped>

</style>
