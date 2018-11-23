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
export class calendar_listMetaData {
  public static XTYPE: string = 'calendar-list';
  public static PROPERTIESOBJECT: any = {
    "activeCounter": "Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoEl": "String/Object",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "bind": "Object/String",
    "blockRefresh": "Boolean",
    "border": "Number/String/Boolean",
    "childEls": "Object/String[]/Object[]",
    "cls": "String/String[]",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultListenerScope": "Boolean",
    "deferEmptyText": "Boolean",
    "deferInitialRefresh": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "disableSelection": "Boolean",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "emptyText": "String",
    "enableToggle": "Boolean",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "id": "String",
    "itemCls": "String",
    "itemId": "String",
    "itemSelector": "String",
    "itemTpl": "String/String[]/Ext.XTemplate",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "loadingCls": "String",
    "loadingHeight": "Number",
    "loadingText": "String",
    "loadingUseMsg": "Boolean",
    "loadMask": "Boolean/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "multiSelect": "Boolean",
    "nameable": "Boolean",
    "navigationModel": "any",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "overItemCls": "String",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preserveScrollOnRefresh": "Boolean",
    "preserveScrollOnReload": "Boolean",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "selectedItemCls": "String",
    "selection": "Ext.data.Model",
    "selectionModel": "Object/Ext.selection.DataViewModel",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "simpleSelect": "Boolean",
    "singleSelect": "Boolean",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "store": "Ext.data.Store",
    "style": "String/Object",
    "tabIndex": "Number",
    "throttledUpdate": "Boolean",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.XTemplate",
    "tplWriteMode": "String",
    "trackOver": "Boolean",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeCounter',
    'alignOnScroll',
    'alignTarget',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'bind',
    'blockRefresh',
    'border',
    'childEls',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultListenerScope',
    'deferEmptyText',
    'deferInitialRefresh',
    'disabled',
    'disabledCls',
    'disableSelection',
    'dock',
    'draggable',
    'emptyText',
    'enableToggle',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'height',
    'hidden',
    'hideMode',
    'html',
    'id',
    'itemCls',
    'itemId',
    'itemSelector',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'loadingCls',
    'loadingHeight',
    'loadingText',
    'loadingUseMsg',
    'loadMask',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'multiSelect',
    'nameable',
    'navigationModel',
    'overCls',
    'overflowX',
    'overflowY',
    'overItemCls',
    'padding',
    'plugins',
    'preserveScrollOnRefresh',
    'preserveScrollOnReload',
    'publishes',
    'reference',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'selectedItemCls',
    'selection',
    'selectionModel',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'simpleSelect',
    'singleSelect',
    'stateEvents',
    'stateful',
    'stateId',
    'store',
    'style',
    'tabIndex',
    'throttledUpdate',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'trackOver',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'viewModel',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'calendar-list'},
		{name:'added',parameters:'calendar-list,container,pos'},
		{name:'afterlayoutanimation',parameters:'calendar-list'},
		{name:'afterrender',parameters:'calendar-list'},
		{name:'beforeactivate',parameters:'calendar-list'},
		{name:'beforecontainerclick',parameters:'calendar-list,e'},
		{name:'beforecontainercontextmenu',parameters:'calendar-list,e'},
		{name:'beforecontainerdblclick',parameters:'calendar-list,e'},
		{name:'beforecontainerkeydown',parameters:'calendar-list,e'},
		{name:'beforecontainerkeypress',parameters:'calendar-list,e'},
		{name:'beforecontainerkeyup',parameters:'calendar-list,e'},
		{name:'beforecontainermousedown',parameters:'calendar-list,e'},
		{name:'beforecontainermouseout',parameters:'calendar-list,e'},
		{name:'beforecontainermouseover',parameters:'calendar-list,e'},
		{name:'beforecontainermouseup',parameters:'calendar-list,e'},
		{name:'beforedeactivate',parameters:'calendar-list'},
		{name:'beforedeselect',parameters:'calendar-list,record,index'},
		{name:'beforedestroy',parameters:'calendar-list'},
		{name:'beforehide',parameters:'calendar-list'},
		{name:'beforeitemclick',parameters:'calendar-list,record,item,index,e'},
		{name:'beforeitemcontextmenu',parameters:'calendar-list,record,item,index,e'},
		{name:'beforeitemdblclick',parameters:'calendar-list,record,item,index,e'},
		{name:'beforeitemkeydown',parameters:'calendar-list,record,item,index,e'},
		{name:'beforeitemkeypress',parameters:'calendar-list,record,item,index,e'},
		{name:'beforeitemkeyup',parameters:'calendar-list,record,item,index,e'},
		{name:'beforeitemlongpress',parameters:'calendar-list,record,item,index,e'},
		{name:'beforeitemmousedown',parameters:'calendar-list,record,item,index,e'},
		{name:'beforeitemmouseenter',parameters:'calendar-list,record,item,index,e'},
		{name:'beforeitemmouseleave',parameters:'calendar-list,record,item,index,e'},
		{name:'beforeitemmouseup',parameters:'calendar-list,record,item,index,e'},
		{name:'beforerefresh',parameters:'calendar-list'},
		{name:'beforerender',parameters:'calendar-list'},
		{name:'beforeselect',parameters:'calendar-list,record,index'},
		{name:'beforeshow',parameters:'calendar-list'},
		{name:'beforestaterestore',parameters:'calendar-list,state'},
		{name:'beforestatesave',parameters:'calendar-list,state'},
		{name:'blur',parameters:'calendar-list,event'},
		{name:'boxready',parameters:'calendar-list,width,height'},
		{name:'containerclick',parameters:'calendar-list,e'},
		{name:'containercontextmenu',parameters:'calendar-list,e'},
		{name:'containerdblclick',parameters:'calendar-list,e'},
		{name:'containerkeydown',parameters:'calendar-list,e'},
		{name:'containerkeypress',parameters:'calendar-list,e'},
		{name:'containerkeyup',parameters:'calendar-list,e'},
		{name:'containermousedown',parameters:'calendar-list,e'},
		{name:'containermouseout',parameters:'calendar-list,e'},
		{name:'containermouseover',parameters:'calendar-list,e'},
		{name:'containermouseup',parameters:'calendar-list,e'},
		{name:'deactivate',parameters:'calendar-list'},
		{name:'deselect',parameters:'calendar-list,record'},
		{name:'destroy',parameters:'calendar-list'},
		{name:'disable',parameters:'calendar-list'},
		{name:'enable',parameters:'calendar-list'},
		{name:'focus',parameters:'calendar-list,event'},
		{name:'focuschange',parameters:'calendar-list,oldFocused,newFocused'},
		{name:'focusenter',parameters:'calendar-list,event'},
		{name:'focusleave',parameters:'calendar-list,event'},
		{name:'hide',parameters:'calendar-list'},
		{name:'highlightitem',parameters:'view,node'},
		{name:'itemadd',parameters:'records,index,node,view'},
		{name:'itemclick',parameters:'calendar-list,record,item,index,e'},
		{name:'itemcontextmenu',parameters:'calendar-list,record,item,index,e'},
		{name:'itemdblclick',parameters:'calendar-list,record,item,index,e'},
		{name:'itemkeydown',parameters:'calendar-list,record,item,index,e'},
		{name:'itemkeypress',parameters:'calendar-list,record,item,index,e'},
		{name:'itemkeyup',parameters:'calendar-list,record,item,index,e'},
		{name:'itemlongpress',parameters:'calendar-list,record,item,index,e'},
		{name:'itemmousedown',parameters:'calendar-list,record,item,index,e'},
		{name:'itemmouseenter',parameters:'calendar-list,record,item,index,e'},
		{name:'itemmouseleave',parameters:'calendar-list,record,item,index,e'},
		{name:'itemmouseup',parameters:'calendar-list,record,item,index,e'},
		{name:'itemremove',parameters:'records,index,item,view'},
		{name:'itemupdate',parameters:'record,index,node,view'},
		{name:'move',parameters:'calendar-list,x,y'},
		{name:'refresh',parameters:'calendar-list'},
		{name:'removed',parameters:'calendar-list,ownerCt'},
		{name:'render',parameters:'calendar-list'},
		{name:'resize',parameters:'calendar-list,width,height,oldWidth,oldHeight'},
		{name:'select',parameters:'calendar-list,record,index'},
		{name:'selectionchange',parameters:'calendar-list,selected'},
		{name:'show',parameters:'calendar-list'},
		{name:'staterestore',parameters:'calendar-list,state'},
		{name:'statesave',parameters:'calendar-list,state'},
		{name:'unhighlightitem',parameters:'view,node'},
		{name:'viewready',parameters:'calendar-list'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforecontainerclick',
		'beforecontainercontextmenu',
		'beforecontainerdblclick',
		'beforecontainerkeydown',
		'beforecontainerkeypress',
		'beforecontainerkeyup',
		'beforecontainermousedown',
		'beforecontainermouseout',
		'beforecontainermouseover',
		'beforecontainermouseup',
		'beforedeactivate',
		'beforedeselect',
		'beforedestroy',
		'beforehide',
		'beforeitemclick',
		'beforeitemcontextmenu',
		'beforeitemdblclick',
		'beforeitemkeydown',
		'beforeitemkeypress',
		'beforeitemkeyup',
		'beforeitemlongpress',
		'beforeitemmousedown',
		'beforeitemmouseenter',
		'beforeitemmouseleave',
		'beforeitemmouseup',
		'beforerefresh',
		'beforerender',
		'beforeselect',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'containerclick',
		'containercontextmenu',
		'containerdblclick',
		'containerkeydown',
		'containerkeypress',
		'containerkeyup',
		'containermousedown',
		'containermouseout',
		'containermouseover',
		'containermouseup',
		'deactivate',
		'deselect',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focuschange',
		'focusenter',
		'focusleave',
		'hide',
		'highlightitem',
		'itemadd',
		'itemclick',
		'itemcontextmenu',
		'itemdblclick',
		'itemkeydown',
		'itemkeypress',
		'itemkeyup',
		'itemlongpress',
		'itemmousedown',
		'itemmouseenter',
		'itemmouseleave',
		'itemmouseup',
		'itemremove',
		'itemupdate',
		'move',
		'refresh',
		'removed',
		'render',
		'resize',
		'select',
		'selectionchange',
		'show',
		'staterestore',
		'statesave',
		'unhighlightitem',
		'viewready',
		'ready'
];
}
@Component({
  selector: 'calendar-list', 
  inputs: calendar_listMetaData.PROPERTIES,
  outputs: calendar_listMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtCalendar_listComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtCalendar_listComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,calendar_listMetaData)}
  public ngOnInit() {this.baseOnInit(calendar_listMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}