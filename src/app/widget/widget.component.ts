import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit
} from '@angular/core';

import { ParentContainerComponent } from '../parent-container/parent-container.component';


@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: [ './widget.component.css' ]
})
export class WidgetComponent implements OnInit  {

  @ViewChild('component', {read: ViewContainerRef}) component: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.drawBarChart();
  }

  public drawBarChart(): void {
    let cmpFactory = this.componentFactoryResolver.resolveComponentFactory(ParentContainerComponent);
    this.component.createComponent(cmpFactory);
  }

}
