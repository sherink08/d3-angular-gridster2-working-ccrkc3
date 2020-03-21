import {
  Component,
  OnInit,
  Input,
  ViewChild,
  OnChanges,
  ElementRef
} from '@angular/core';

import * as d3 from 'd3';


@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: [ './bar-chart.component.css' ]
})
export class BarChartComponent implements OnInit, OnChanges  {

  @Input() xDomain: string[];
  @Input() yDomain: number[];
  @Input() chartData: any[];  // Unprocessed data for the chart

  @ViewChild('chart') chart: ElementRef;

  // I need these for axes
  public height: number;
  public width: number;

  // These are the scales
  public x: any;
  public y: any;

  public margin: any = {
    left: 5,
    right: 20,
    top: 0,
    bottom: 20
  };

  public data: any[] = [];  // Svg data for the chart (see template)

  ngOnInit() {
    setTimeout(_ => this.drawChart(), 2500);
  }

  ngOnChanges() {
    this.drawChart();
  }

  public drawChart(): void {
    // Find container dimensions and set chart dimensions
    let heightPlot: number = this.chart.nativeElement.offsetHeight;
    let widthPlot: number = this.chart.nativeElement.offsetWidth;

    this.height = heightPlot - this.margin.bottom;
    this.width = widthPlot - this.margin.right;

    console.log(heightPlot, widthPlot);
    console.log(this.height, this.width);

    // Define scales
    this.x = d3.scaleBand()
      .domain(this.xDomain)
      .range([0, this.width])
      .padding(0.2);

    this.y = d3.scaleLinear()
      .domain(this.yDomain)
      .range([this.height, 0]);

    // Generate plotting data
    this.data = [];
    for (let element of this.chartData) {
      this.data.push({
        height: this.height - this.y(element.value),
        width: this.x.bandwidth(),
        x: this.x(String(element.label)),
        y: this.y(element.value)
      })
    }   
  }

  public resizeChart(): void {
    this.drawChart();
  }

}
