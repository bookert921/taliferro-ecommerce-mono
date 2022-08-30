import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() headingText = "Sales";
  @Input() option1 = "1 Month";
  @Input() option2 = "3 Month";
  @Input() option3 = "6 Month";
  @Input() option4 = "1 Year";
  @Input() fill: boolean = true;
  @Input() borderWidth: number = 5;
  @Input() borderColor = "#fff";
  @Input() responsive: boolean = true;
  @Input() chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  @Input() data: StatsPeriodData = {
    "period1": {
      "total": Math.floor(Math.random() * 1000),
      "subHeading": "1 month total",
      "chartData": [
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000)
      ],
      "box": [
        {
          "boxHeading": "Box 1",
          "boxIcon": "fa fa-shopping-cart",
          "label1": "Label 1",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 2",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 3",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 4",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 5",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Box 2",
          "boxIcon": "fa fa-car",
          "label1": "Label 6",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 7",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 8",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 9",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 10",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Box 3",
          "boxIcon": "fa fa-bell-o",
          "label1": "Label 11",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 12",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 13",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 14",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 15",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Box 4",
          "boxIcon": "fa fa-book",
          "label1": "Label 16",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 17",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 18",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 19",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 20",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        }
      ]
    },
    "period2": {
      "total": Math.floor(Math.random() * 1000),
      "subHeading": "3 month total",
      "chartData": [
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000)
      ],
      "box": [
        {
          "boxHeading": "Today",
          "boxIcon": "fa fa-shopping-cart",
          "label1": "Label 1",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 2",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 3",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 4",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 5",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Past 7 days",
          "boxIcon": "fa fa-car",
          "label1": "Label 6",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 7",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 8",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 9",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 10",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Past 30 days",
          "boxIcon": "fa fa-bell-o",
          "label1": "Label 11",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 12",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 13",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 14",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 15",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Past Year",
          "boxIcon": "fa fa-book",
          "label1": "Label 16",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 17",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 18",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 19",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 20",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        }
      ]
    },
    "period3": {
      "total": Math.floor(Math.random() * 1000),
      "subHeading": "6 month total",
      "chartData": [
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000)
      ],
      "box": [
        {
          "boxHeading": "Box 1",
          "boxIcon": "fa fa-shopping-cart",
          "label1": "Label 1",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 2",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 3",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 4",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 5",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Box 2",
          "boxIcon": "fa fa-car",
          "label1": "Label 6",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 7",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 8",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 9",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 10",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Box 3",
          "boxIcon": "fa fa-bell-o",
          "label1": "Label 11",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 12",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 13",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 14",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 15",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Box 4",
          "boxIcon": "fa fa-book",
          "label1": "Label 16",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 17",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 18",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 19",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 20",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
      ]
    },
    "period4": {
      "total": Math.floor(Math.random() * 1000),
      "subHeading": "1 year total",
      "chartData": [
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000)
      ],
      "box": [
        {
          "boxHeading": "Box 1",
          "boxIcon": "fa fa-shopping-cart",
          "label1": "Label 1",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 2",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 3",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 4",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 5",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Box 2",
          "boxIcon": "fa fa-car",
          "label1": "Label 6",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 7",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 8",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 9",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 10",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Box 3",
          "boxIcon": "fa fa-bell-o",
          "label1": "Label 11",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 12",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 13",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 14",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 15",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
        {
          "boxHeading": "Box 4",
          "boxIcon": "fa fa-book",
          "label1": "Label 16",
          "count1": Math.floor(Math.random() * 1000),
          "label2": "Label 17",
          "count2": Math.floor(Math.random() * 1000),
          "label3": "Label 18",
          "count3": Math.floor(Math.random() * 1000),
          "label4": "Label 19",
          "count4": Math.floor(Math.random() * 1000),
          "label5": "Label 20",
          "count5": Math.floor(Math.random() * 1000),
          "moreInfoLink": "/"
        },
      ]
    },
  };

  option1Display = '';
  option2Display = 'none';
  option3Display = 'none';
  option4Display = 'none';

  private ctx1: any;
  private ctx2: any;
  private ctx3: any;
  private ctx4: any;

  constructor(private _router: Router, private _categoryService: CategoryService) { }

  ngOnInit() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
  }

  showFirst(): void {
    this.option1Display = '';
    this.option2Display = 'none';
    this.option3Display = 'none';
    this.option4Display = 'none';
  }

  showSecond(): void {
    this.option1Display = 'none';
    this.option2Display = '';
    this.option3Display = 'none';
    this.option4Display = 'none';
  }

  showThird(): void {
    this.option1Display = 'none';
    this.option2Display = 'none';
    this.option3Display = '';
    this.option4Display = 'none';
  }

  showFourth(): void {
    this.option1Display = 'none';
    this.option2Display = 'none';
    this.option3Display = 'none';
    this.option4Display = '';
  }

  showMore(link: string): void {
    this._router.navigate([link])
  }

  private initChart1(): void {
    this.ctx1 = document.getElementById("chart-stat-widget14-1");

    try {
      if (this.ctx1) {
        const chart = new Chart(this.ctx1, {
          type: 'line',
          data: {
            labels: this.chartLabels,
            datasets: [{
              data: this.data.period1.chartData,
              fill: this.fill,
              borderColor: '#fff',
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              pointBackgroundColor: "#FFF",
              pointHoverBackgroundColor: "#07C",
              pointHoverBorderColor: "#FFF",
              pointHoverRadius: 10,
            }]
          },
          options: {
            responsive: this.responsive,
          }
        })
      }
    }
    catch (err) {
      console.error(null, err)
    }

  }
  private initChart2(): void {
    this.ctx2 = document.getElementById("chart-stat-widget14-2");
    try {
      if (this.ctx2) {
        const chart = new Chart(this.ctx2, {
          type: 'line',
          data: {
            labels: this.chartLabels,
            datasets: [{
              data: this.data.period2.chartData,
              fill: this.fill,
              borderColor: '#fff',
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              pointBackgroundColor: "#FFF",
              pointHoverBackgroundColor: "#07C",
              pointHoverBorderColor: "#FFF",
              pointHoverRadius: 10,
            }]
          },
          options: {
            responsive: this.responsive,
          }
        })
      }
    }
    catch (err) {
      console.error(null, err)
    }

  }
  private initChart3(): void {
    this.ctx3 = document.getElementById("chart-stat-widget14-3");
    try {
      if (this.ctx3) {
        const chart = new Chart(this.ctx3, {
          type: 'line',
          data: {
            labels: this.chartLabels,
            datasets: [{
              data: this.data.period3.chartData,
              fill: this.fill,
              borderColor: '#fff',
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              pointBackgroundColor: "#FFF",
              pointHoverBackgroundColor: "#07C",
              pointHoverBorderColor: "#FFF",
              pointHoverRadius: 10,
            }]
          },
          options: {
            responsive: this.responsive,
          }
        })
      }
    }
    catch (err) {
      console.error(null, err)
    }

  }
  private initChart4(): void {
    this.ctx4 = document.getElementById("chart-stat-widget14-4");
    try {
      if (this.ctx4) {
        const chart = new Chart(this.ctx4, {
          type: 'line',
          data: {
            labels: this.chartLabels,
            datasets: [{
              data: this.data.period4.chartData,
              fill: this.fill,
              borderColor: '#fff',
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              pointBackgroundColor: "#FFF",
              pointHoverBackgroundColor: "#07C",
              pointHoverBorderColor: "#FFF",
              pointHoverRadius: 10,
            }]
          },
          options: {
            responsive: this.responsive,
          }
        })
      }
    } catch (err) {
      console.error(null, err)
    }

  }
}

export interface StatsPeriodData {
  period1: WidgetStatsData;
  period2: WidgetStatsData;
  period3: WidgetStatsData;
  period4: WidgetStatsData;
}

export interface WidgetStatsData {
  total: number;
  subHeading: string;
  chartData: number[];
  box: WidgetStatsBox[];
}

export interface WidgetStatsBox {
  boxHeading: string;
  boxIcon: string;
  label1: string;
  count1: any;
  label2: string;
  count2: any;
  label3: string;
  count3: any;
  label4: string;
  count4: number;
  label5: string;
  count5: number;
  moreInfoLink: string;
}