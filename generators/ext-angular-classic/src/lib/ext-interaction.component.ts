import {
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class interactionMetaData {
  public static XTYPE: string = 'interaction';
  public static PROPERTIESOBJECT: any = {
    "chart": "Ext.chart.AbstractChart",
    "enabled": "Boolean",
    "gesture": "Object",
    "listeners": "Object",
    "platformConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'chart',
    'enabled',
    'gesture',
    'listeners',
    'platformConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'ready'
];
}
@Component({
  selector: 'interaction', 
  inputs: interactionMetaData.PROPERTIES,
  outputs: interactionMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtInteractionComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtInteractionComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,interactionMetaData)}
  public ngOnInit() {this.baseOnInit(interactionMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}