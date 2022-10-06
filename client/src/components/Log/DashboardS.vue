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
        <apexchart type="line" height="350" :options="chartOptionsDiffC" :series="seriesDiffC"></apexchart>
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
        <h1>{{EpvTd[EpvTd.length-1]}}</h1>
      </div>
      <div class="H">
        <h1>Epv1_total_kWh</h1>
        <h1>{{EpvTt[EpvTt.length-1]}}</h1>
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
        <apexchart type="radialBar" :options="chartOptionsDiffM" :series="seriesDiffM"></apexchart>
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
        <apexchart type="radialBar" :options="chartOptionsDiffD" :series="seriesDiffD"></apexchart>
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
      chartOptionsDiffM: {
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '22px'
              }
            }
          }
        },
      },
      chartOptionsDiffD: {
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '22px'
              }
            }
          }
        },
        colors: ['#4cf5b1']
      },
      chartOptionsDiffC: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        xaxis: {
          type: "datetime",
          categories: [],
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            title: {
              text: "Vpv1_V",
              style: {
                color: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
            title: {
              text: "Ipv1_A",
              style: {
                color: '#00E396',
              }
            },
          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
            title: {
              text: "Ppv1_W",
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
      },
      seriesDiffC: [
        {
          name: 'Vpv1_V',
          type: 'line',
          data: []
        }, {
          name: 'Ipv1_A',
          type: 'line',
          data: []
        }, {
          name: 'Ppv1_W',
          type: 'line',
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
      seriesDiffM: [],
      seriesDiffD: [],
      ToDayDate: [],
      ToDayVpv: [],
      ToDayIpv: [],
      ToDayPpv: [],
      ToDayPac: [],
      EpvTd: [],
      EpvTt: [],
      PacThisMonthTotal: 0,
      PacLastMonthTotal: 0,
      PacDiffMonthTotal: 0,
      PacTodayTotal: 0,
      PacYesterdayTotal: 0,
      PacDiffTodayTotal: 0,
      PacThisMonthTotalArr: [0, 0, 0, 0, 0, 0, 0],
      PacLastMonthTotalArr: [0, 0, 0, 0, 0, 0, 0],
      PacDiffMonthTotalArr: [0, 0, 0, 0, 0, 0, 0],
      PacTodayTotalArr: [0, 0, 0, 0, 0, 0, 0],
      PacYesterdayTotalArr: [0, 0, 0, 0, 0, 0, 0],
      PacDiffTodayTotalArr: [0, 0, 0, 0, 0, 0, 0],
      PacDateD: ["", "", "", "", "", "", ""],
      PacDateM: ["", "", "", "", "", "", ""]
    }
  },
  async created() {
    const d = new Date();
    const oneDAgo = new Date(); oneDAgo.setDate(oneDAgo.getDate() - 1)
    const twoDAgo = new Date(); twoDAgo.setDate(twoDAgo.getDate() - 2)
    const threeDAgo = new Date(); threeDAgo.setDate(threeDAgo.getDate() - 3)
    const fourDAgo = new Date(); fourDAgo.setDate(fourDAgo.getDate() - 4)
    const fiveDAgo = new Date(); fiveDAgo.setDate(fiveDAgo.getDate() - 5)
    const sixDAgo = new Date(); sixDAgo.setDate(sixDAgo.getDate() - 6)
    const sevenDAgo = new Date(); sevenDAgo.setDate(sevenDAgo.getDate() - 7)
    const twoMAgo = new Date(); twoMAgo.setDate(twoMAgo.getMonth() - 1)
    const threeMAgo = new Date(); threeMAgo.setDate(threeMAgo.getMonth() - 2)
    const fourMAgo = new Date(); fourMAgo.setDate(fourMAgo.getMonth() - 3)
    const fiveMAgo = new Date(); fiveMAgo.setDate(fiveMAgo.getMonth() - 4)
    const sixMAgo = new Date(); sixMAgo.setDate(sixMAgo.getMonth() - 5)
    this.logs = (await LogService.index()).data
    for (let i = 0; i < this.logs.length; i++) {
      this.EpvTt.push(this.logs[i].Epv1_total_kWh);
      //this year
      if (d.getFullYear().toString() == this.logs[i].updatedAt.slice(0, 4)) {
        //sumPacThisMonth
        if ((d.getMonth() + 1).toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + (d.getMonth() + 1).toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacThisMonthTotal = this.PacThisMonthTotal + this.logs[i].Pac_W
          this.PacLastMonthTotalArr[this.PacLastMonthTotalArr.length - 1] += this.logs[i].Pac_W
          //sumPacToday
          if (d.getDate().toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + d.getDate().toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotal = this.PacTodayTotal + this.logs[i].Pac_W
            this.ToDayDate.push(this.logs[i].updatedAt);
            this.ToDayVpv.push(this.logs[i].Vpv1_V);
            this.ToDayIpv.push(this.logs[i].Ipv1_A);
            this.ToDayPpv.push(this.logs[i].Ppv1_W);
            this.ToDayPac.push(this.logs[i].Pac_W);
            this.EpvTd.push(this.logs[i].Epv1_today_kWh);
            this.PacDate[this.PacDate.length - 1] = this.logs[i].updatedAt.slice(0, 10)
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 1] += this.logs[i].Pac_W
          }
          //sumPacYesterDay
          if ((oneDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 1).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacYesterdayTotal = this.PacYesterdayTotal + this.logs[i].Pac_W
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 2] += this.logs[i].Pac_W
            this.PacYesterdayTotalArr[this.PacYesterdayTotalArr.length - 1] += this.logs[i].Pac_W
          }
          if ((twoDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 2).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 3] += this.logs[i].Pac_W
            this.PacYesterdayTotalArr[this.PacYesterdayTotalArr.length - 2] += this.logs[i].Pac_W
          }
          if ((threeDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 3).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 4] += this.logs[i].Pac_W
            this.PacYesterdayTotalArr[this.PacYesterdayTotalArr.length - 3] += this.logs[i].Pac_W
          }
          if ((fourDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 4).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 5] += this.logs[i].Pac_W
            this.PacYesterdayTotalArr[this.PacYesterdayTotalArr.length - 4] += this.logs[i].Pac_W
          }
          if ((fiveDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 5).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 6] += this.logs[i].Pac_W
            this.PacYesterdayTotalArr[this.PacYesterdayTotalArr.length - 5] += this.logs[i].Pac_W
          }
          if ((sixDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 3).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 7] += this.logs[i].Pac_W
            this.PacYesterdayTotalArr[this.PacYesterdayTotalArr.length - 6] += this.logs[i].Pac_W
          }
          if ((sevenDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 3).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacYesterdayTotalArr[this.PacYesterdayTotalArr.length - 7] += this.logs[i].Pac_W
          }
        }
        //sumPacLastMonth
        if (d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacLastMonthTotal = this.PacLastMonthTotal + this.logs[i].Pac_W
          this.PacLastMonthTotalArr[this.PacLastMonthTotalArr.length - 2] += this.logs[i].Pac_W
        }
        if (twoMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacLastMonthTotalArr[this.PacLastMonthTotalArr.length - 3] += this.logs[i].Pac_W
        }
        if (threeMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacLastMonthTotalArr[this.PacLastMonthTotalArr.length - 4] += this.logs[i].Pac_W
        }
        if (fourMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacLastMonthTotalArr[this.PacLastMonthTotalArr.length - 5] += this.logs[i].Pac_W
        }
        if (fiveMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacLastMonthTotalArr[this.PacLastMonthTotalArr.length - 6] += this.logs[i].Pac_W
        }
        if (sixMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacLastMonthTotalArr[this.PacLastMonthTotalArr.length - 7] += this.logs[i].Pac_W
        }

      }

    }
    this.PacTodayTotal = Math.ceil(this.PacTodayTotal)
    this.PacYesterdayTotal = Math.ceil(this.PacYesterdayTotal)
    this.PacDiffTodayTotal = Math.ceil(this.PacTodayTotal - this.PacYesterdayTotal)
    this.PacThisMonthTotal = Math.ceil(this.PacThisMonthTotal)
    this.PacLastMonthTotal = Math.ceil(this.PacLastMonthTotal)
    this.PacDiffMonthTotal = Math.ceil(this.PacThisMonthTotal - this.PacLastMonthTotal)
    //console.log(this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 1])
    console.log(this.logs[7].updatedAt.slice(0, 10))
    console.log(this.PacTodayTotalArr)
    console.log(this.PacYesterdayTotalArr)
    console.log(this.PacLastMounthTotalArr)
    this.seriesDiffC = [
      {
        name: "Vpv1_V",
        data: this.ToDayVpv
      },
      {
        name: "Ipv1_A",
        data: this.ToDayIpv
      },
      {
        name: "Ppv1_W",
        data: this.ToDayPpv
      }
    ];
    this.seriesVpv1 = [
      {
        name: "Vpv1_V",
        data: this.ToDayVpv
      },
    ];
    this.seriesIpv1 = [
      {
        name: "Ipv1_A",
        data: this.ToDayIpv
      },
    ];
    this.seriesPpv1 = [
      {
        name: "Ppv1_A",
        data: this.ToDayPpv
      },
    ];
    this.seriesPac = [
      {
        name: "Pac_W",
        data: this.ToDayPac
      },
    ];
    this.seriesTd = [
      {
        name: "Epv1_today_kWh",
        data: this.EpvTd
      },
    ];
    this.seriesDiffM = [
      Math.ceil((this.PacDiffMonthTotal / this.PacThisMonthTotal) * 100)
    ];
    this.seriesDiffD = [
      Math.ceil((this.PacDiffTodayTotal / this.PacTodayTotal) * 100)
    ];
    this.chartOptionsDiffC = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.ToDayDate,
        },
      },
    };
    this.chartOptionsVpv1 = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.ToDayDate,
        },
      },
    };
    this.chartOptionsIpv1 = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.ToDayDate,
        },
      },
    };
    this.chartOptionsPpv1 = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.ToDayDate,
        },
      },
    };
    this.chartOptionsPac = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.ToDayDate,
        },
      },
    };
    this.chartOptionsTd = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.ToDayDate,
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