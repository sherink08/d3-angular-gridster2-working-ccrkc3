/*
 * This is a stripped down implementation of angular-resize-event library
 * https://github.com/vdolek/angular-resize-event
 * Licensed under MIT license.
 */

import {
  Directive,
  OnInit,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';

// tslint:disable-next-line
import { ResizeSensor } from 'css-element-queries';


@Directive({
  selector: '[elementResize]'
})
export class ResizeDirective implements OnInit {

  @Output() elementResize: EventEmitter<any> = new EventEmitter<any>();

  constructor(private readonly element: ElementRef) { }

  ngOnInit() {
    new ResizeSensor(this.element.nativeElement, _ => this.onElementResize());
    this.onElementResize();
  }

  private onElementResize(): void {
    this.elementResize.emit('resized');
  }

}
