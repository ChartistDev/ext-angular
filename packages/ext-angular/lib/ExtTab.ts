//import EWCTab from '../dist/ext-tab.component.js';
//inputs: (new EWCTab()).properties,
import EWCTab from '@sencha/ext-web-components/dist/ext-tab.component.js';
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
    selector: 'ExtTab',
    inputs: ['renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','active','alignSelf','allowDepress','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','arrow','arrowAlign','autoEvent','axisLock','badgeText','bind','border','bottom','buttonType','centered','closable','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','destroyMenu','disabled','displayed','docked','draggable','enableToggle','undefined','undefined','undefined','flex','floated','focusCls','fullscreen','handler','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','icon','iconAlign','iconCls','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxWidth','menu','menuAlign','minHeight','minWidth','modal','modelValidation','name','nameable','padding','plugins','pressed','pressedDelay','publishes','record','reference','relative','renderTo','right','ripple','rotation','scope','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','stretchMenu','style','tabIndex','tabPosition','text','textAlign','title','toFrontOnShow','toggleHandler','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','activate','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforepressedchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','pressedchange','release','removed','resize','rightchange','scrollablechange','show','tap','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTabComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtTabComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','active','alignSelf','allowDepress','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','arrow','arrowAlign','autoEvent','axisLock','badgeText','bind','border','bottom','buttonType','centered','closable','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','destroyMenu','disabled','displayed','docked','draggable','enableToggle','undefined','undefined','undefined','flex','floated','focusCls','fullscreen','handler','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','icon','iconAlign','iconCls','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxWidth','menu','menuAlign','minHeight','minWidth','modal','modelValidation','name','nameable','padding','plugins','pressed','pressedDelay','publishes','record','reference','relative','renderTo','right','ripple','rotation','scope','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','stretchMenu','style','tabIndex','tabPosition','text','textAlign','title','toFrontOnShow','toggleHandler','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCTab()).events,
            ['ready','activate','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforepressedchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','pressedchange','release','removed','resize','rightchange','scrollablechange','show','tap','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'tab'
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

//var events = (new EWCTab()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
