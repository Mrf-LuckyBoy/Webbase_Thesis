<template>
  <div>
    <h1>หน้าติดตามการทำงานของอินเวอร์เตอร์</h1>
    <div class="container2">
      <div class="AA">
        <h2>การผลิตไฟฟ้าในเดือนนี้เทียบกับเดือนที่แล้ว(Watt)</h2>
        <h3>{{pacDiffTtM[1]}} Watt <br><br>คิดเป็นเปอร์เซ็นต์<br>({{Math.ceil(pacDiffTtM[0])}}) %</h3>
      </div>
      <div class="BB">
        <h2>การผลิตไฟฟ้าวันนี้เทียบกับเมื่อวาน(Watt)</h2>
        <h3>{{PacDiffTtD[1]}} Watt <br><br>คิดเป็นเปอร์เซ็นต์<br>({{Math.ceil(PacDiffTtD[0])}}) %</h3>
      </div>
      <div class="CC">
        <h2>การผลิตไฟฟ้าสะสมในวันนี้(Kwh)</h2>
        <h2><br>{{EpvTd[EpvTd.length-1]}} Kwh</h2>
      </div>
      <div class="DD">
        <h2>การผลิตไฟฟ้าสะสมทั้งหมด(Kwh)</h2>
        <h2><br>{{EpvTt[EpvTt.length-1]}} Kwh</h2>
      </div>
    </div>
    <div class="container11">
      <div class="BarD">
        <h2>เปรียบเทียบการผลิตไฟฟ้าในรายสัปดาห์(Watt)</h2>
        <apexchart type="bar" height="350" :options="chartOptionsBD" :series="seriesBD"></apexchart>
      </div>
      <div class="BarM">
        <h2>เปรียบเทียบการผลิตไฟฟ้าเป็นรายเดือน(Watt)</h2>
        <apexchart type="bar" height="350" :options="chartOptionsBM" :series="seriesBM"></apexchart>
      </div>
    </div>
    <div class="container1">
      <div class="E">
        <h2>การผลิตไฟฟ้า(W)</h2>
        <apexchart height="250" type="line" :options="chartOptionsPac" :series="seriesPac"></apexchart>
      </div>
      <div class="F">
        <h2>การผลิตไฟฟ้าสะสมรายวัน(Kwh)</h2>
        <apexchart height="250" type="line" :options="chartOptionsTd" :series="seriesTd"></apexchart>
      </div>
    </div>
    <div class="container">
      <div class="D">
        <h2>การติดตามค่า</h2>
        <h3>แรงดันไฟ้า, กระแสไฟฟ้า, กำลังไฟฟ้า</h3>
        <apexchart type="line" height="350" :options="chartOptionsDiffC" :series="seriesDiffC"></apexchart>
      </div>
    </div>
    <div class="E">
      <h2>พยากรณ์การผลิตกระแสไฟฟ้า</h2>
      <apexchart type="line" height="350" :options="predictOp" :series="predictSeries"></apexchart>
    </div>
  </div>

</template>
<script>
import LogService from '@/services/LogsService'
import ForecastService from '@/services/ForecastService'
export default {
  name: 'hello',
  data: function () {
    return {
      predictOp: {
        xaxis: {
          categories: ["5นาที","10นาที","15นาที","20นาที","25นาที","30นาที","35นาที","40นาที","45นาที","50นาที","55นาที","60นาที"]
        },
        colors: ['#c92e2e']
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
          width: [4, 4, 4]
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
              text: "แรงดังไฟฟ้า",
              style: {
                color: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
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
              text: "กระแสไฟฟ้า",
              style: {
                color: '#00E396',
              }
            },
          },
          {
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
              text: "กำลังไฟฟ้า",
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
      },
      chartOptionsBD: {
        chart: {
          type: 'bar',
          height: 350
        },
        xaxis: {
          categories: [],
        },
      },
      chartOptionsBM: {
        chart: {
          type: 'bar',
          height: 350
        },
        xaxis: {
          categories: [],
        },
        colors: ['#4cf5b1']
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
      seriesPac: [
        {
          name: "ไฟฟ้าผลิตได้(Watt)",
          data: []
        },
      ],
      seriesTd: [
        {
          name: "ผลิตไฟฟ้าสะสมได้(Watt)",
          data: []
        },
      ],
      seriesBD: [
        {
          name: 'Watt',
          data: []
        }
      ],
      seriesBM: [
        {
          name: 'Watt',
          data: []
        }
      ],
      predictSeries: [
        {
          name: 'predict',
          data: []
        }
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
      PrePac: [],
      AlP:[],
      pAc:[],
      //card
      PacDiffTtD:[0 , 0],
      pacDiffTtM:[0 , 0],
      //barchart diff month
      PacThisMonthTotalArr: [0, 0, 0, 0, 0, 0, 0],
      //barchart diff Day
      PacTodayTotalArr: [0, 0, 0, 0, 0, 0, 0],
      PacDateD: ["", "", "", "", "", "", ""],
      PacDateM: ["", "", "", "", "", "", ""],
      Gm:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],
      Gd:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],
      pdt:["5นาที","10นาที","15นาที","20นาที","25นาที","30นาที","35นาที","40นาที","45นาที","50นาที","55นาที","60นาที"],
    }
  },
  async created() {
    let d = new Date();
    let oneDAgo = new Date(); oneDAgo.setDate(oneDAgo.getDate() - 1)
    let twoDAgo = new Date(); twoDAgo.setDate(twoDAgo.getDate() - 2)
    let threeDAgo = new Date(); threeDAgo.setDate(threeDAgo.getDate() - 3)
    let fourDAgo = new Date(); fourDAgo.setDate(fourDAgo.getDate() - 4)
    let fiveDAgo = new Date(); fiveDAgo.setDate(fiveDAgo.getDate() - 5)
    let sixDAgo = new Date(); sixDAgo.setDate(sixDAgo.getDate() - 6)
    let sevenDAgo = new Date(); sevenDAgo.setDate(sevenDAgo.getDate() - 7)

    let twoMAgo = new Date(); twoMAgo.setMonth(twoMAgo.getMonth() - 1)
    let threeMAgo = new Date(); threeMAgo.setMonth(threeMAgo.getMonth() - 2)
    let fourMAgo = new Date(); fourMAgo.setMonth(fourMAgo.getMonth() - 3)
    let fiveMAgo = new Date(); fiveMAgo.setMonth(fiveMAgo.getMonth() - 4)
    let sixMAgo = new Date(); sixMAgo.setMonth(sixMAgo.getMonth() - 5)
    this.logs = (await LogService.index()).data
    this.ford = (await ForecastService.forecast()).data
    
      for (let i = 0; i < this.logs.length; i++) {
      this.EpvTt.push(this.logs[i].Epv1_total_kWh);
      this.AlP.push(Math.ceil(this.logs[i].Pac_W))
      //this year
      if (d.getFullYear().toString() == this.logs[i].updatedAt.slice(0, 4)) {
        //sumPacThisMonth
        if ((d.getMonth() + 1).toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + (d.getMonth() + 1).toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 1] += Math.ceil(this.logs[i].Pac_W)
          if(1<(parseInt(this.logs[i].updatedAt.slice(11,13)))<11){
          //sumPacToday
            if (d.getDate().toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + d.getDate().toString() == this.logs[i].updatedAt.slice(8, 10)) {
            //this.ToDayDate.push(this.logs[this.logs.length-1].updatedAt.slice(0,11)+""+(parseInt(this.logs[this.logs.length-1].updatedAt.slice(11,13))+7)+""+this.logs[this.logs.length-1].updatedAt.slice(13,this.logs[this.logs.length-1].updatedAt.length));
            this.ToDayDate.push(this.logs[i].updatedAt.slice(0,11)+(parseInt(this.logs[i].updatedAt.slice(11,13))+7)+this.logs[i].updatedAt.slice(13,this.logs[i].updatedAt.length))
            this.ToDayVpv.push(this.logs[i].Vpv1_V);
            this.ToDayIpv.push(this.logs[i].Ipv1_A);
            this.ToDayPpv.push(this.logs[i].Ppv1_W);
            this.ToDayPac.push(this.logs[i].Pac_W);
            this.EpvTd.push(this.logs[i].Epv1_today_kWh);
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 1] += Math.ceil(this.logs[i].Pac_W)
            }
          }
          //sumPacYesterDay
          if ((oneDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 1).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 2] += Math.ceil(this.logs[i].Pac_W)
          }
          if ((twoDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 2).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 3] += Math.ceil(this.logs[i].Pac_W)
          }
          if ((threeDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 3).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 4] += Math.ceil(this.logs[i].Pac_W)
          }
          if ((fourDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 4).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 5] += Math.ceil(this.logs[i].Pac_W)
          }
          if ((fiveDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 5).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 6] += Math.ceil(this.logs[i].Pac_W)
          }
          if ((sixDAgo.getDate()).toString() == this.logs[i].updatedAt.slice(8, 10) || "0" + (d.getDate() - 6).toString() == this.logs[i].updatedAt.slice(8, 10)) {
            this.PacTodayTotalArr[this.PacTodayTotalArr.length - 7] += Math.ceil(this.logs[i].Pac_W)
          }
        }
        //sumPacLastMonth
        if (d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + d.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 2] += Math.ceil(this.logs[i].Pac_W)
        }
        if ((twoMAgo.getMonth()).toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + (twoMAgo.getMonth()).toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 3] += Math.ceil(this.logs[i].Pac_W)
        }
        if (threeMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + threeMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 4] += Math.ceil(this.logs[i].Pac_W)
        }
        if (fourMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + fourMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 5] += Math.ceil(this.logs[i].Pac_W)
        }
        if (fiveMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + fiveMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 6] += Math.ceil(this.logs[i].Pac_W)
        }
        if (sixMAgo.getMonth().toString() == this.logs[i].updatedAt.slice(5, 7) || "0" + (sixMAgo.getMonth()).toString() == this.logs[i].updatedAt.slice(5, 7)) {
          this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 7] += Math.ceil(this.logs[i].Pac_W)
        }

      }

      }
      //array for predect
      /*ARIMAPromise.then(ARIMA => {
      const arima = new ARIMA({ p: 2, d: 2, q: 1, P: 0, D: 0, Q: 0, S: 13, verbose: false }).train(this.AlP.slice(-955))
      const [pred, errors] = arima.predict(10)
      })
      */

      

    
    console.log(sixDAgo.getDate())
    console.log(this.PacThisMonthTotalArr)
    console.log(this.PacTodayTotalArr)
    console.log(this.AlP.slice(-955))
    this.PacDiffTtD[this.PacDiffTtD.length-1]=this.PacTodayTotalArr[this.PacTodayTotalArr.length - 1] - this.PacTodayTotalArr[this.PacTodayTotalArr.length - 2]
    this.PacDiffTtD[this.PacDiffTtD.length-2]=( this.PacDiffTtD[this.PacDiffTtD.length-1]/ this.PacTodayTotalArr[this.PacTodayTotalArr.length - 2]) * 100
    this.pacDiffTtM[this.pacDiffTtM.length-1]=this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 1] - this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 2]
    this.pacDiffTtM[this.pacDiffTtM.length-2]=( this.pacDiffTtM[this.pacDiffTtM.length-1] / this.PacThisMonthTotalArr[this.PacThisMonthTotalArr.length - 2]) * 100
    this.PacDateD = [this.Gd[sixDAgo.getDay()],this.Gd[fiveDAgo.getDay()],this.Gd[fourDAgo.getDay()],this.Gd[threeDAgo.getDay()],this.Gd[twoDAgo.getDay()],this.Gd[oneDAgo.getDay()],this.Gd[d.getDay()]]
    this.PacDateM = [this.Gm[d.getMonth()-6],this.Gm[d.getMonth()-5],this.Gm[d.getMonth()-4],this.Gm[d.getMonth()-3],this.Gm[d.getMonth()-2],this.Gm[d.getMonth()-1],this.Gm[d.getMonth()]]
    this.seriesDiffC = [
      {
        name: "แรงดันไฟฟ้า",
        data: this.ToDayVpv
      },
      {
        name: "กระแสไฟฟ้า",
        data: this.ToDayIpv
      },
      {
        name: "กำลังไฟฟ้า",
        data: this.ToDayPpv
      }
    ];
    this.seriesPac = [
      {
        name: "ไฟฟ้าผลิตได้(Watt)",
        data: this.ToDayPac
      },
    ];
    this.seriesTd = [
      {
        name: "ผลิตไฟฟ้าสะสมได้(Watt)",
        data: this.EpvTd
      },
    ];
    this.seriesBD = [
      {
        name: 'Watt',
        data: this.PacTodayTotalArr
        }
    ];
    this.seriesBM = [
      {
        name: 'Watt',
        data: this.PacThisMonthTotalArr
        }
    ];
    this.predictSeries = [
      {
        name: 'predict',
        data: this.ford
      }
    ]
    this.chartOptionsDiffC = {
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
    this.chartOptionsBD = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.PacDateD,
        },
      },
    };
    this.chartOptionsBM = {
      ...this.chartOptions,
      ...{
        xaxis: {
          categories: this.PacDateM,
        },
      },
    };
  },

  


}
</script>
<style scoped>


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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 15px 15px;
  grid-template-areas:
    "aa bb cc dd";
}
div.container11{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 15px 15px;
  grid-template-areas:
    "bd bm";
}
div.BarD{
  grid-area: bd;
}
div.BarM{
  grid-area: bm;
}


div.E {
  grid-area: e;
}

div.F {
  grid-area: f;
}

div.AA {
  grid-area: aa;
}

div.BB {
  grid-area: bb;
}

div.CC {
  grid-area: cc;
}

div.DD {
  grid-area: dd;
}
</style>