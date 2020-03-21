import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { GridComponent } from './grid/grid.component';
import { XAxisComponent } from './x-axis/x-axis.component';
import { ParentContainerComponent } from './parent-container/parent-container.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ResizeDirective } from './resize.directive.ts';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    GridsterModule
  ],
  declarations: [
    AppComponent,
    WidgetComponent,
    GridComponent,
    XAxisComponent,
    ParentContainerComponent,
    BarChartComponent,
    ResizeDirective
  ],
  entryComponents: [
    ParentContainerComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
