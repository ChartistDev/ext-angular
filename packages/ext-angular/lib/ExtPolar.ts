//import EWCPolar from '../dist/ext-polar.component.js';
//inputs: (new EWCPolar()).properties,
import EWCPolar from '@sencha/ext-web-components/dist/ext-polar.component.js';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtPolar',
    inputs: ['renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','animation','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axes','axisLock','background','bind','bodyCls','border','bottom','captions','cardSwitchAnimation','center','centered','cls','colors','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','disabled','displayed','docked','downloadServerUrl','draggable','engine','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','gradients','height','hidden','hideAnimation','hideMode','hideOnMaskTap','highlightItem','html','id','inactiveChildTabIndex','innerCls','innerPadding','insetPadding','instanceCls','interactions','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','legend','listeners','mainRect','manageBorders','margin','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','radius','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizeHandler','right','ripple','scrollable','series','session','shadow','shareableName','shim','showAnimation','sprites','stateful','statefulDefaults','stateId','store','style','surfaceZIndexes','tabIndex','theme','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerefresh','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bodyresize','bottomchange','centeredchange','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','itemclick','itemdblclick','itemhighlight','itemhighlightchange','itemmousedown','itemmousemove','itemmouseout','itemmouseover','itemmouseup','itemtap','layout','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','redraw','refresh','remove','removed','renderedchange','resize','rightchange','scrollablechange','show','spriteclick','spritedblclick','spritemousedown','spritemousemove','spritemouseout','spritemouseover','spritemouseup','spritetap','storechange','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPolarComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtPolarComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','animation','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axes','axisLock','background','bind','bodyCls','border','bottom','captions','cardSwitchAnimation','center','centered','cls','colors','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','disabled','displayed','docked','downloadServerUrl','draggable','engine','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','gradients','height','hidden','hideAnimation','hideMode','hideOnMaskTap','highlightItem','html','id','inactiveChildTabIndex','innerCls','innerPadding','insetPadding','instanceCls','interactions','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','legend','listeners','mainRect','manageBorders','margin','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','radius','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','resizeHandler','right','ripple','scrollable','series','session','shadow','shareableName','shim','showAnimation','sprites','stateful','statefulDefaults','stateId','store','style','surfaceZIndexes','tabIndex','theme','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCPolar()).events,
            ['ready','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerefresh','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bodyresize','bottomchange','centeredchange','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','itemclick','itemdblclick','itemhighlight','itemhighlightchange','itemmousedown','itemmousemove','itemmouseout','itemmouseover','itemmouseup','itemtap','layout','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','redraw','refresh','remove','removed','renderedchange','resize','rightchange','scrollablechange','show','spriteclick','spritedblclick','spritemousedown','spritemousemove','spritemouseout','spritemouseover','spritemouseup','spritetap','storechange','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'polar'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCPolar()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
