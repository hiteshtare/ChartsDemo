import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent implements OnInit {

  genderdata: any;
  genderoptions: any;

  constructor(private router: Router) { }

  ngOnInit() {

    this.genderdata = { labels: ['Female', 'Male', 'Other'] };
    this.genderdata.datasets = [
      {
        backgroundColor: "rgba(63,103,126,1)",
        hoverBackgroundColor: "rgba(50,90,100,1)",
        //backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        //hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        data: [200, 300, 400],
        label: 'My First Dataset'
      },
      {
        //backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        //hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        backgroundColor: "rgba(163,103,126,1)",
        hoverBackgroundColor: "rgba(140,85,100,1)",
        data: [150, 250, 350],
        label: 'My Second Dataset'
      },
      {
        //backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        //hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        backgroundColor: "rgba(63,203,226,1)",
        hoverBackgroundColor: "rgba(46,185,235,1)",
        data: [345, 345, 345],
        label: 'My Third Dataset'
      },

    ];
    this.genderoptions = {
      scaleFontColor: "black",

      legend: {
        labels: {
          fontColor: "red",

        },
      },

      scales: {
        xAxes: [{
          gridLines: {
            color: "black",
            display: false,
          },
          stacked: true
        }],

        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Load in %',
            fontColor: "black",
          },
          gridLines: {
            color: "black",
            display: true,
          },
          stacked: true
        }]
      }
    };

  }
}
