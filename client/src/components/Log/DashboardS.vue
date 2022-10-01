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
        <apexchart height="400" type="area" :options="chartOptions" :series="series"></apexchart>
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
    <br><br><br><br>
    <div class="container2">
      <div class="G">
        <h1>Epv1_today_kWh</h1>
        <h1>{{arrG[arrG.length-1]}}</h1>
      </div>
      <div class="H">
        <h1>Epv1_total_kWh</h1>
        <h1>{{arrH[arrH.length-1]}}</h1>
      </div>
      <div class="I">
        <h1>PacThisMonthTotal</h1>
        <h1>{{PacThisMonthTotal}}</h1>
      </div>
      <div class="J">
        <h1>PacLastMonthTotal</h1>
        <h1>{{PacLastMonthTotal}}</h1>
      </div>
      <div class="K">
        <h1>PacDiffMonthTotal</h1>
        <h1>{{PacDiffMonthTotal}}</h1>
      </div>
      <div class="L">
        <h1>PacTodayTotal</h1>
        <h1>{{PacTodayTotal}}</h1>
      </div>
      <div class="M">
        <h1>PacYesterdayTotal</h1>
        <h1>{{PacYesterdayTotal}}</h1>
      </div>
      <div class="N">
        <h1>PacDiffTodayTotal</h1>
        <h1>{{PacDiffTodayTotal}}</h1>
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
      seriesPpv1: [
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
      arrG: [],
      arrH: [],
      PacThisMonthTotal: 0,
      PacLastMonthTotal: 0,
      PacDiffMonthTotal: 0,
      PacTodayTotal: 0,
      PacYesterdayTotal: 0,
      PacDiffTodayTotal: 0,
    }
  },
  async created() {
    const d = new Date();
    this.logs = (await LogService.index()).data
    for (let i = 0; i < this.logs.length; i++) {
      this.arrA.push(this.logs[i].updatedAt);
      this.arrB.push(this.logs[i].Vpv1_V);
      this.arrC.push(this.logs[i].Ipv1_A);
      this.arrD.push(this.logs[i].Ppv1_W);
      this.arrE.push(this.logs[i].Pac_W);
      this.arrG.push(this.logs[i].Epv1_today_kWh);
      this.arrH.push(this.logs[i].Epv1_total_kWh);
      console.log(d.getFullYear().toString())
      console.log(this.logs[i].updatedAt.slice(0, 4))
      console.log(d.getFullYear().toString() == this.logs[i].updatedAt.slice(0, 4))
      if (d.getFullYear().toString() == this.logs[i].updatedAt.slice(0, 4)) {
        //sumPacThisMonth
        if ((d.getMonth() + 1).toString() == this.logs[i].updatedAt.slice(5, 7) || "0"+(d.getMonth() + 1).toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacThisMonthTotal = this.PacThisMonthTotal + this.logs[i].Pac_W
          //sumPacToday
          if (d.getDate().toString() == this.logs[i].updatedAt.slice(8 , 10) || "0"+d.getDate().toString() == this.logs[i].updatedAt.slice(8 , 10)) {
            this.PacTodayTotal = this.PacTodayTotal + this.logs[i].Pac_W
          }
          //sumPacYesterDay
          if ((d.getDate()-1).toString() == this.logs[i].updatedAt.slice(8 , 10) || "0"+(d.getDate()-1).toString() == this.logs[i].updatedAt.slice(8 , 10)) {
            this.PacYesterdayTotal = this.PacYesterdayTotal + this.logs[i].Pac_W
          }
        }
        //sumPacLastMonth
        if(d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0"+d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)){
          this.PacLastMonthTotal =  this.PacLastMonthTotal + this.logs[i].Pac_W
        }
      }
    }
    this.PacTodayTotal = Math.ceil(this.PacTodayTotal)
    this.PacYesterdayTotal = Math.ceil(this.PacYesterdayTotal)
    this.PacDiffTodayTotal = Math.ceil(this.PacTodayTotal - this.PacYesterdayTotal)
    this.PacThisMonthTotal = Math.ceil(this.PacThisMonthTotal)
    this.PacLastMonthTotal = Math.ceil(this.PacLastMonthTotal)
    this.PacDiffMonthTotal = Math.ceil(this.PacThisMonthTotal - this.PacLastMonthTotal)

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
  grid-template-rows: 1fr;
  gap: 15px 15px;
  grid-template-areas:
    "e f";
}

div.container2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 15px 15px;
  grid-template-areas:
    "g h"
    "i l"
    "j m"
    "k n";
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

div.F {
  grid-area: f;
}

div.G {
  grid-area: g;
}

div.H {
  grid-area: h;
}

div.I {
  grid-area: i;
}

div.J {
  grid-area: j;
}

div.K {
  grid-area: k;
}

div.L {
  grid-area: l;
}

div.M {
  grid-area: m;
}

div.N {
  grid-area: n;
}
</style>