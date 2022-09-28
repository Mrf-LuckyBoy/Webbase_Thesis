<template>
  <div class="Dashboard">
    <div id="wrapper">
      <h1>Dashboard</h1>
      <div class="mini-chart">
        <div class="a">
          <h3>distanceCm</h3>
          <apexchart width="250" type="line" :options="options1" :series="series1"></apexchart>
        </div>
        <div class="b">
          <h3>distanceInch</h3>
          <apexchart width="250" type="line" :options="options2" :series="series2"></apexchart>
        </div>
        <div class="c">
          <h3>distancemm</h3>
          <apexchart width="250" type="line" :options="options3" :series="series3"></apexchart>
        </div>
        <div class="d">
          <h3>distanceFt</h3>
          <apexchart width="250" type="line" :options="options4" :series="series4"></apexchart>
        </div>
      </div>
      <div class="secmini-chart">
        <div class="chart-area">
          <apexchart width="600" type="area" :options="options" :series="series"></apexchart>
        </div>
        <div class="chart-line">
          <apexchart width="600" type="line" :options="options" :series="series"></apexchart>
        </div>
      </div>
      <div class="chart-bar">
        <apexchart type="bar" height="350" :options="options" :series="series"></apexchart>
      </div>
      <div>{{arrA}}</div>
    </div>
  </div>
</template>
<script>
import LogService from '@/services/LogsService'
export default {

  name: 'Data_for_Dynamic_Dashboard',
  data: () => (
    {
      options: {
        chart: { id: 'vuechart-example' },
        xaxis: { categories: [] },
      },
      options1: {
        chart: { id: 'vuechart-example1' },
        xaxis: {
          categories: ['2022-09-17T04:57:20.534Z', '2022-09-17T04:57:23.635Z', '2022-09-17T04:57:26.838Z', '2022-09-17T04:57:30.109Z', '2022-09-17T04:57:33.283Z', '2022-09-17T04:57:36.446Z', '2022-09-17T04:57:42.399Z', '2022-09-17T04:57:45.574Z', '2022-09-17T04:57:48.680Z', '2022-09-17T04:57:54.771Z', '2022-09-17T04:57:58.063Z', '2022-09-17T04:58:01.159Z', '2022-09-17T04:58:06.872Z', '2022-09-17T04:58:10.044Z', '2022-09-17T04:58:13.137Z', '2022-09-17T04:58:16.306Z', '2022-09-17T04:58:19.451Z', '2022-09-17T04:58:25.777Z', '2022-09-17T04:58:28.876Z', '2022-09-17T04:58:31.973Z', '2022-09-17T04:58:35.440Z', '2022-09-17T04:58:38.638Z', '2022-09-17T04:58:41.832Z', '2022-09-17T04:58:45.066Z', '2022-09-17T04:58:48.163Z', '2022-09-17T04:58:51.315Z', '2022-09-17T04:58:54.486Z', '2022-09-17T04:58:57.661Z', '2022-09-17T04:59:00.763Z', '2022-09-17T04:59:14.560Z', '2022-09-17T04:59:15.650Z', '2022-09-17T04:59:19.782Z', '2022-09-17T04:59:20.871Z', '2022-09-17T04:59:24.636Z', '2022-09-17T04:59:25.719Z', '2022-09-17T04:59:26.804Z', '2022-09-17T04:59:27.895Z', '2022-09-17T04:59:28.985Z', '2022-09-17T04:59:32.648Z', '2022-09-17T04:59:33.748Z', '2022-09-17T04:59:34.940Z', '2022-09-17T04:59:36.034Z', '2022-09-17T04:59:37.129Z', '2022-09-17T04:59:38.228Z', '2022-09-17T04:59:39.357Z', '2022-09-17T04:59:40.439Z', '2022-09-17T04:59:41.531Z', '2022-09-17T04:59:42.612Z', '2022-09-17T04:59:43.778Z', '2022-09-17T04:59:44.866Z', '2022-09-17T04:59:45.940Z', '2022-09-17T04:59:49.640Z', '2022-09-17T04:59:50.732Z', '2022-09-17T04:59:51.863Z', '2022-09-17T04:59:52.956Z', '2022-09-17T04:59:54.053Z', '2022-09-17T04:59:55.125Z', '2022-09-17T04:59:56.342Z', '2022-09-17T04:59:57.463Z', '2022-09-17T04:59:58.589Z']
        },
      },
      options2: {
        chart: { id: 'vuechart-example2' },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        colors: ['#4cf5b1']
      },
      options3: {
        chart: { id: 'vuechart-example3' },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        colors: ['#f7a745']
      },
      options4: {
        chart: { id: 'vuechart-example4' },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        colors: ['#c92e2e']
      },
      series: [{
        name: 'distanceCm',
        data: [1195.56, 55.01, 39.46, 23.68, 23.68, 42.04, 16.03, 16.03, 44.85, 7.36, 5.32, 14.45, 15.4, 15.4, 35.78, 40.14, 39.46, 1195.63, 35.78, 34.88, 37.16, 36.48, 42.06, 47.97, 42.04, 42.24, 41.65, 57.1, 37.16, 34.66, 34.65, 34.65, 34.65, 34.65, 34.65, 34.66, 34.65, 34.65, 35.12, 35.1, 34.66, 35.1, 34.65, 35.56, 54.74, 59.21, 57.8, 57.82, 57.66, 57.82, 57.39, 57.95, 34.65, 57.8, 54.74, 48.33, 35.34, 38.78, 39.22, 850.9]
      },
      {
        name: 'distanceInch',
        data: [55 - 10, 62 - 10, 89 - 10, 66 - 10, 98 - 10, 72 - 10, 101 - 10, 75 - 10, 94 - 10, 120 - 10, 117 - 10, 139 - 10]
      },
      {
        name: 'distanceMm',
        data: [55 - 20, 62 - 20, 89 - 20, 66 - 20, 98 - 20, 72 - 20, 101 - 20, 75 - 20, 94 - 20, 120 - 20, 117 - 20, 139 - 20]
      },
      {
        name: 'distanceFt',
        data: [55 - 30, 62 - 30, 89 - 30, 66 - 30, 98 - 30, 72 - 30, 101 - 30, 75 - 30, 94 - 30, 120 - 30, 117 - 30, 139 - 30]
      },
      ],
      series1: [{
        name: 'distanceCm',
        data: [1195.56, 55.01, 39.46, 23.68, 23.68, 42.04, 16.03, 16.03, 44.85, 7.36, 5.32, 14.45, 15.4, 15.4, 35.78, 40.14, 39.46, 1195.63, 35.78, 34.88, 37.16, 36.48, 42.06, 47.97, 42.04, 42.24, 41.65, 57.1, 37.16, 34.66, 34.65, 34.65, 34.65, 34.65, 34.65, 34.66, 34.65, 34.65, 35.12, 35.1, 34.66, 35.1, 34.65, 35.56, 54.74, 59.21, 57.8, 57.82, 57.66, 57.82, 57.39, 57.95, 34.65, 57.8, 54.74, 48.33, 35.34, 38.78, 39.22, 850.9]
      },
      ],
      series2: [{
        name: 'distanceInch',
        data: [55 - 10, 62 - 10, 89 - 10, 66 - 10, 98 - 10, 72 - 10, 101 - 10, 75 - 10, 94 - 10, 120 - 10, 117 - 10, 139 - 10]
      },
      ],
      series3: [{
        name: 'distanceMm',
        data: [55 - 20, 62 - 20, 89 - 20, 66 - 20, 98 - 20, 72 - 20, 101 - 20, 75 - 20, 94 - 20, 120 - 20, 117 - 20, 139 - 20]
      },
      ],
      series4: [{
        name: 'distanceFt',
        data: [55 - 30, 62 - 30, 89 - 30, 66 - 30, 98 - 30, 72 - 30, 101 - 30, 75 - 30, 94 - 30, 120 - 30, 117 - 30, 139 - 30]
      },
      ],


    }),
  async created() {
    const log = (await LogService.index()).data
    const arrA = []
    const arrB = []
    for (let i = 0; i < log.length; i++) {
      arrA.push(log[i].createdAt);
      arrB.push(log[i].distanceCm);
    }
  }

}
</script>
<style scoped>
div.Dashboard {
  margin: 60px;

}

h1 strong {
  font-weight: 6000;
}

div.mini-chart {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 0fr 0fr;
  gap: 0px 0px;
  grid-template-areas:
    "a b c d";
}

div.secmini-chart {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0fr 0fr;
  gap: 0px 0px;
  grid-template-areas:
    "ca cl";
}

div.a {
  grid-area: a;
}

div.b {
  grid-area: b;
}

div.c {
  grid-area: c;
}

div.chart-area {
  grid-area: ca;
}

div.chart-line {
  grid-area: cl;
}
</style>
