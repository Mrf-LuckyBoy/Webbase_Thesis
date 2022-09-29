<template>
  <div>
    <h1>Dashboard</h1>
    <div class="container">
      <div class="A">
        <h3>Vpv1(V)</h3>
        <apexchart height="400" type="line" :options="chartOptionsVpv1" :series="seriesVpv1"></apexchart>
      </div>
      <div class="B">
        <h3>Ipv1(A)</h3>
        <apexchart height="400" type="line" :options="chartOptionsIpv1" :series="seriesIpv1"></apexchart>
      </div>
      <div class="C">
        <h3>Ppv1(W)</h3>
        <apexchart height="400" type="line" :options="chartOptionsPpv1" :series="seriesPpv1"></apexchart>
      </div>
      <div class="D">
        <h3>Diff chart</h3>
        <apexchart height="400" type="line" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
    <div class="container1">
      <div class="E">
        <h3>Pac(W)</h3>
        <apexchart height="250" type="line" :options="chartOptionsPac" :series="seriesPac"></apexchart>
      </div>
      <div class="F">
        <h3>Epv1_today_kWh</h3>
        <apexchart height="250" type="line" :options="chartOptionsTd" :series="seriesTd"></apexchart>
      </div>
    </div>
  </div>

</template>
<script>
import LogService from '@/services/LogsService'

export default {
  name: 'hello',
  data: function () {
    return {
      chartOptions: {
        xaxis: {
          type: "datetime",
          categories: []
        }
      },
      chartOptionsVpv1: {
        xaxis: {
          type: "datetime",
          categories: []
        }
      },
      chartOptionsIpv1: {
        xaxis: {
          type: "datetime",
          categories: []
        },
        colors: ['#4cf5b1']
      },
      chartOptionsPpv1: {
        xaxis: {
          type: "datetime",
          categories: []
        },
        colors: ['#f7a745']
      },
      chartOptionsPac: {
        xaxis: {
          type: "datetime",
          categories: []
        },
        colors: ['#c92e2e']
      },
      chartOptionsTd: {
        xaxis: {
          type: "datetime",
          categories: []
        }
      },
      series: [
        {
          name: "Vpv1_V",
          data: []
        },
        {
          name: "Ipv1_A",
          data: []
        },
        {
          name: "Ppv1_W",
          data: []
        }
      ],
      seriesVpv1: [
        {
          name: "Vpv1_V",
          data: []
        },
      ],
      seriesIpv1: [
        {
          name: "Ipv1_A",
          data: []
        },
      ],
      seriesIpv1: [
        {
          name: "Ppv1_A",
          data: []
        },
      ],
      seriesPac: [
        {
          name: "Pac_W",
          data: []
        },
      ],
      seriesTd: [
        {
          name: "Pac_W",
          data: []
        },
      ],
      arrA: [],
      arrB: [],
      arrC: [],
      arrD: [],
      arrE: [],
      arrF: [],
      arrG: []
    }
  },
  async created() {
    this.logs = (await LogService.index()).data
    for (let i = 0; i < this.logs.length; i++) {
      this.arrA.push(this.logs[i].createdAt);
      this.arrB.push(this.logs[i].Vpv1_V);
      this.arrC.push(this.logs[i].Ipv1_A);
      this.arrD.push(this.logs[i].Ppv1_W);
      this.arrE.push(this.logs[i].Pac_W);
      this.arrG.push(this.logs[i].Epv1_today_kWh);
    }
    this.series = [
      {
        name: "Vpv1_V",
        data: this.arrB
      },
      {
        name: "Ipv1_A",
        data: this.arrC
      },
      {
        name: "Ppv1_W",
        data: this.arrD
      }
    ];
    this.seriesVpv1 = [
      {
        name: "Vpv1_V",
        data: this.arrB
      },
    ];
    this.seriesIpv1 = [
      {
        name: "Ipv1_A",
        data: this.arrC
      },
    ];
    this.seriesPpv1 = [
      {
        name: "Ppv1_A",
        data: this.arrD
      },
    ];
    this.seriesPac = [
      {
        name: "Pac_W",
        data: this.arrE
      },
    ];
    this.seriesTd = [
      {
        name: "Pac_W",
        data: this.arrG
      },
    ];
    this.chartOptions = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.arrA,
        },
      },
    };
    this.chartOptionsVpv1 = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.arrA,
        },
      },
    };
    this.chartOptionsIpv1 = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.arrA,
        },
      },
    };
    this.chartOptionsPpv1 = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.arrA,
        },
      },
    };
    this.chartOptionsPac = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.arrA,
        },
      },
    };
    this.chartOptionsTd = {
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
<style scoped>
div.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 0fr;
  gap: 10px 10px;
  grid-template-areas:
    "a b c"
    "d d d";
}

div.container1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px 15px;
  grid-template-areas:
    "e f";
}

div.A {
  grid-area: a;
}

div.B {
  grid-area: b;
}

div.C {
  grid-area: c;
}

div.D {
  grid-area: d;
}

div.E {
  grid-area: e;
}
div.F{
  grid-area: f;
}
</style>