import {
  Component,
  OnInit,
  OnChanges,
  Input
} from '@angular/core';

import * as d3 from 'd3';


@Component({
  selector: '[x-axis]',
  templateUrl: './x-axis.component.html',
  styleUrls: [ './x-axis.component.css' ]
})
export class XAxisComponent implements OnInit, OnChanges {

  @Input() height: number;
  @Input() width: number;
  @Input() scale: any;  // d3.scaleBand()

  public path: string;
  public data: any[];

  ngOnInit() {
    this.drawAxis();
  }

  ngOnChanges() {
    this.drawAxis();
  }

  public drawAxis(): void {
    // Generate path for x axis
    let xPathContext = d3.path();
    xPathContext.moveTo(0.5, 6);
    xPathContext.lineTo(0.5, 0.5);
    xPathContext.lineTo(this.width + 0.5, 0.5);
    xPathContext.lineTo(this.width + 0.5, 6);
    this.path = xPathContext.toString();

    // Generate ticks for x axis
    this.data = [];

    for (let element of this.scale.domain()) {
      this.data.push({
        offset: this.scale(String(element)) + this.scale.bandwidth() / 2,
        label: element
      });
    } 
  }

}
