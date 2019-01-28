import {
  Injectable,
  Host,
  Optional,
  SkipSelf,
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class dataviewMetaData {
  public static XTYPE: string = 'dataview';
  public static PROPERTIESOBJECT: any = {
    "activeChildTabIndex": "Number",
    "activeItem": "Ext.Component/Object/String/Number",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "associatedData": "Boolean/Object",
    "autoDestroy": "Boolean",
    "autoSize": "Boolean",
    "axisLock": "Boolean",
    "bind": "Object/String",
    "border": "Boolean",
    "bottom": "Number/String",
    "cardSwitchAnimation": "String/Object/Boolean",
    "centered": "Boolean",
    "cls": "String/String[]",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "control": "Object",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object",
    "defaultType": "String",
    "deferEmptyText": "Boolean",
    "deselectOnContainerClick": "Boolean",
    "disabled": "Boolean",
    "disableSelection": "Boolean",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "emptyItemText": "String",
    "emptyState": "Boolean",
    "emptyText": "String/Boolean",
    "emptyTextDefaults": "Object/Ext.Component",
    "emptyTextProperty": "String",
    "enableTextSelection": "Boolean",
    "enterAnimation": "String/Mixed",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "html": "String/Ext.dom.Element/HTMLElement",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "inline": "Boolean/Object",
    "innerCls": "String",
    "instanceCls": "String/String[]",
    "itemButtonMode": "boolean",
    "itemCls": "String",
    "itemId": "String",
    "itemRipple": "Boolean/Object",
    "items": "Array/Object",
    "itemsFocusable": "Boolean",
    "itemTpl": "String/String[]/Ext.XTemplate",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "lastSelected": "Ext.data.Model",
    "layout": "Object/String",
    "left": "Number/String",
    "listeners": "Object",
    "loadingHeight": "Number",
    "loadingText": "String/Boolean",
    "manageBorders": "Boolean",
    "margin": "Number/String",
    "markDirty": "Boolean",
    "masked": "Boolean/String/Object/Ext.Mask/Ext.LoadMask",
    "maxHeight": "Number/String",
    "maxWidth": "Number/String",
    "minHeight": "Number/String",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "pressedDelay": "Number",
    "publishes": "String/String[]/Object",
    "record": "Ext.data.Model",
    "reference": "String",
    "referenceHolder": "Boolean",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "resetFocusPosition": "Boolean",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "scrollable": "Boolean/String/Object",
    "scrollDock": "'start'/'emd'",
    "scrollToTopOnRefresh": "Boolean",
    "selectable": "Object/Ext.dataview.selection.Model",
    "selected": "Ext.util.Collection",
    "selection": "Ext.data.Model",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "stateful": "Boolean/Object/String[]",
    "statefulDefaults": "Object/String[]",
    "stateId": "String",
    "store": "Ext.data.Store/Object",
    "style": "String/Object",
    "tabIndex": "Number",
    "toFrontOnShow": "Boolean",
    "tooltip": "String/Object",
    "top": "Number/String",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "translatable": "Object",
    "triggerCtEvent": "'tap'/'singletap'",
    "triggerEvent": "'childtap'/'childsingletap'/'childdoubletap'/'childswipe'/'childtaphold'/'childlongpress'",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "userSelectable": "Boolean/String/Object",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "weighted": "Boolean",
    "width": "Number/String",
    "x": "Number",
    "xtype": "String",
    "y": "Number",
    "zIndex": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeChildTabIndex',
    'activeItem',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'associatedData',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'displayed',
    'docked',
    'draggable',
    'emptyItemText',
    'emptyState',
    'emptyText',
    'emptyTextDefaults',
    'emptyTextProperty',
    'enableTextSelection',
    'enterAnimation',
    'eventHandlers',
    'exitAnimation',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'id',
    'inactiveChildTabIndex',
    'inline',
    'innerCls',
    'instanceCls',
    'itemButtonMode',
    'itemCls',
    'itemId',
    'itemRipple',
    'items',
    'itemsFocusable',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lastSelected',
    'layout',
    'left',
    'listeners',
    'loadingHeight',
    'loadingText',
    'manageBorders',
    'margin',
    'markDirty',
    'masked',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'plugins',
    'pressedDelay',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'right',
    'ripple',
    'scrollable',
    'scrollDock',
    'scrollToTopOnRefresh',
    'selectable',
    'selected',
    'selection',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'style',
    'tabIndex',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggerCtEvent',
    'triggerEvent',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'viewModel',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'newActiveItem,dataview,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:''},
		{name:'added',parameters:'sender,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sender'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'sender'},
		{name:'beforestorechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforetofront',parameters:'dataview'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'dataview,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'childdoubletap',parameters:'dataview,location'},
		{name:'childlongpress',parameters:'dataview,location'},
		{name:'childmouseenter',parameters:'dataview,location'},
		{name:'childmouseleave',parameters:'dataview,location'},
		{name:'childsingletap',parameters:'dataview,location'},
		{name:'childtap',parameters:'dataview,location'},
		{name:'childtaphold',parameters:'dataview,location'},
		{name:'childtouchcancel',parameters:'dataview,location'},
		{name:'childtouchend',parameters:'dataview,location'},
		{name:'childtouchmove',parameters:'dataview,location'},
		{name:'childtouchstart',parameters:'dataview,location'},
		{name:'deactivate',parameters:'oldActiveItem,dataview,newActiveItem'},
		{name:'deselect',parameters:'dataview,records'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'sender'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'dataview,event'},
		{name:'focusenter',parameters:'dataview,event'},
		{name:'focusleave',parameters:'dataview,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'itemdoubletap',parameters:'dataview,index,target,record,e'},
		{name:'itemlongpress',parameters:'dataview,index,target,record,e'},
		{name:'itemmouseenter',parameters:'dataview,index,target,record,e'},
		{name:'itemmouseleave',parameters:'dataview,index,target,record,e'},
		{name:'itemsingletap',parameters:'dataview,index,target,record,e'},
		{name:'itemswipe',parameters:'dataview,index,target,record,e'},
		{name:'itemtap',parameters:'dataview,index,target,record,e'},
		{name:'itemtaphold',parameters:'dataview,index,target,record,e'},
		{name:'itemtouchcancel',parameters:'dataview,index,target,record,e'},
		{name:'itemtouchend',parameters:'dataview,index,target,record,e'},
		{name:'itemtouchmove',parameters:'dataview,index,target,record,e'},
		{name:'itemtouchstart',parameters:'dataview,index,target,record,e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:''},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'navigate',parameters:'dataview,to,from'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'refresh',parameters:'dataview'},
		{name:'remove',parameters:''},
		{name:'removed',parameters:'sender,container,index'},
		{name:'renderedchange',parameters:'dataview,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'rowselection',parameters:'view,selection'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'select',parameters:'dataview,selected'},
		{name:'selectionchange',parameters:'view,records,selected,selection'},
		{name:'show',parameters:'sender'},
		{name:'storechange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'dataview'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'sender,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'activeItemchange',
		'add',
		'added',
		'beforeactiveItemchange',
		'beforebottomchange',
		'beforecenteredchange',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforestorechange',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'childdoubletap',
		'childlongpress',
		'childmouseenter',
		'childmouseleave',
		'childsingletap',
		'childtap',
		'childtaphold',
		'childtouchcancel',
		'childtouchend',
		'childtouchmove',
		'childtouchstart',
		'deactivate',
		'deselect',
		'destroy',
		'disabledchange',
		'dockedchange',
		'erased',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'itemdoubletap',
		'itemlongpress',
		'itemmouseenter',
		'itemmouseleave',
		'itemsingletap',
		'itemswipe',
		'itemtap',
		'itemtaphold',
		'itemtouchcancel',
		'itemtouchend',
		'itemtouchmove',
		'itemtouchstart',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'move',
		'moved',
		'navigate',
		'orientationchange',
		'painted',
		'positionedchange',
		'refresh',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'rightchange',
		'rowselection',
		'scrollablechange',
		'select',
		'selectionchange',
		'show',
		'storechange',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'dataview', 
  inputs: dataviewMetaData.PROPERTIES,
  outputs: dataviewMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtDataviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDataviewComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef.nativeElement,dataviewMetaData,hostComponent)
    }
  public ngOnInit() {
    this.baseOnInit(dataviewMetaData)
  }
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    //this['ready'].emit(this)
  }
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}

}