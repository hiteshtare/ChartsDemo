import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dough-nut-chart',
  templateUrl: './dough-nut-chart.component.html',
  styleUrls: ['./dough-nut-chart.component.css']
})
export class DoughNutChartComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit() {
  this.data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
  };
  }

}
