import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: [ './parent-container.component.css' ]
})
export class ParentContainerComponent implements OnInit {

  public xDomain: string[];
  public yDomain: number[];
  public chartData: any[];

  private data = [
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value: 3, label: 3},
    {value: 4, label: 4},
    {value: 5, label: 5},
    {value: 6, label: 6},
    {value: 7, label: 7},
    {value: 8, label: 8},
    {value: 9, label: 9},
    {value: 10, label: 10}
  ];

  ngOnInit() {
    this.generateChartData();
  }

  public generateChartData(): void {
    this.xDomain = this.data.map(d => String(d.label));
    this.yDomain = [0, d3.max(this.data, function(d) { return d.value })];
    this.chartData = this.data.map(d => {
        return {
          value: Math.floor(Math.random() * 10 + 1),
          label: d.label
        }
    });
  }

}
