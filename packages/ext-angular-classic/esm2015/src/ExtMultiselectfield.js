var ExtMultiselectfieldComponent_1;
import * as tslib_1 from "tslib";
//import EWCMultiselectfield from '../dist/ext-multiselectfield.component.js';
//inputs: (new EWCMultiselectfield()).properties,
import EWCMultiselectfield from '@sencha/ext-web-components-classic/dist/ext-multiselectfield.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtMultiselectfieldComponent = ExtMultiselectfieldComponent_1 = class ExtMultiselectfieldComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeError', 'activeErrorsTpl', 'activeItem', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'appendOnly', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoFitErrors', 'autoRender', 'undefined', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'bubbleEvents', 'childEls', 'cls', 'columnWidth', 'combineErrors', 'combineLabels', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'ddReorder', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'delimiter', 'detachOnRemove', 'disabled', 'disabledCls', 'displayField', 'dock', 'draggable', 'dragGroup', 'dragText', 'dropGroup', 'errorMsgCls', 'fieldBodyCls', 'fieldDefaults', 'fieldLabel', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'formItemCls', 'frame', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'html', 'id', 'inactiveChildTabIndex', 'invalidCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelConnector', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'layout', 'liquidLayout', 'listConfig', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxSelections', 'maxSelectionsText', 'maxWidth', 'minHeight', 'minSelections', 'minSelectionsText', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'nameHolder', 'overCls', 'undefined', 'undefined', 'padding', 'pageSize', 'plugins', 'preventMark', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'submitValue', 'suspendLayout', 'tabGuard', 'tabIndex', 'tbar', 'title', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validateOnChange', 'validation', 'validationField', 'value', 'valueField', 'valuePublishEvent', 'viewModel', 'weight', 'width', 'xtype',], (new EWCMultiselectfield()).events, ['ready', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'childmove', 'deactivate', 'destroy', 'dirtychange', 'disable', 'enable', 'errorchange', 'fielderrorchange', 'fieldvaliditychange', 'focus', 'focusenter', 'focusleave', 'hide', 'move', 'remove', 'removed', 'render', 'resize', 'show', 'staterestore', 'statesave', 'validitychange',], vc);
        this.xtype = 'multiselectfield';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtMultiselectfieldComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtMultiselectfieldComponent = ExtMultiselectfieldComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ExtMultiselectfield',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeError', 'activeErrorsTpl', 'activeItem', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'appendOnly', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoFitErrors', 'autoRender', 'undefined', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'bubbleEvents', 'childEls', 'cls', 'columnWidth', 'combineErrors', 'combineLabels', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'ddReorder', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'delimiter', 'detachOnRemove', 'disabled', 'disabledCls', 'displayField', 'dock', 'draggable', 'dragGroup', 'dragText', 'dropGroup', 'errorMsgCls', 'fieldBodyCls', 'fieldDefaults', 'fieldLabel', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'formItemCls', 'frame', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'html', 'id', 'inactiveChildTabIndex', 'invalidCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelConnector', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'layout', 'liquidLayout', 'listConfig', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxSelections', 'maxSelectionsText', 'maxWidth', 'minHeight', 'minSelections', 'minSelectionsText', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'nameHolder', 'overCls', 'undefined', 'undefined', 'padding', 'pageSize', 'plugins', 'preventMark', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'submitValue', 'suspendLayout', 'tabGuard', 'tabIndex', 'tbar', 'title', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validateOnChange', 'validation', 'validationField', 'value', 'valueField', 'valuePublishEvent', 'viewModel', 'weight', 'width', 'xtype',],
        outputs: ['ready', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'childmove', 'deactivate', 'destroy', 'dirtychange', 'disable', 'enable', 'errorchange', 'fielderrorchange', 'fieldvaliditychange', 'focus', 'focusenter', 'focusleave', 'hide', 'move', 'remove', 'removed', 'render', 'resize', 'show', 'staterestore', 'statesave', 'validitychange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtMultiselectfieldComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
], ExtMultiselectfieldComponent);
export { ExtMultiselectfieldComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCMultiselectfield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0TXVsdGlzZWxlY3RmaWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbInNyYy9FeHRNdWx0aXNlbGVjdGZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOEVBQThFO0FBQzlFLGlEQUFpRDtBQUNqRCxPQUFPLG1CQUFtQixNQUFNLDJFQUEyRSxDQUFDO0FBQzVHLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN4QyxJQUFhLDRCQUE0QixvQ0FBekMsTUFBYSw0QkFBNkIsU0FBUSxPQUFPO0lBQ3JELFlBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFFcEIsS0FBSyxDQUNELElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsbUJBQW1CLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQywrQkFBK0IsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixF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QUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsdUJBQXVCLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsb0JBQW9CLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsaUJBQWlCLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxFQUFDLGVBQWUsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLFlBQVksRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRTtRQUN6aUYsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxzQkFBc0IsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLGtCQUFrQixFQUFDLGVBQWUsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsb0JBQW9CLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLGtCQUFrQixFQUFDLHFCQUFxQixFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFFO1FBQzVoQixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw4QkFBNEIsQ0FBQyxFQUFDLENBQUM7UUFDNUYsUUFBUSxFQUFFLDJCQUEyQjtLQUN4QyxDQUFDO0lBSU8sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO0dBSDFCLDRCQUE0QixDQWdDeEM7U0FoQ1ksNEJBQTRCO0FBbUN6Qyw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpRkFBaUY7QUFDakYsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQixJQUFJO0FBQ0oseUNBQXlDO0FBRXpDLHNEQUFzRDtBQUN0RCx5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ011bHRpc2VsZWN0ZmllbGQgZnJvbSAnLi4vZGlzdC9leHQtbXVsdGlzZWxlY3RmaWVsZC5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDTXVsdGlzZWxlY3RmaWVsZCgpKS5wcm9wZXJ0aWVzLFxuaW1wb3J0IEVXQ011bHRpc2VsZWN0ZmllbGQgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC1tdWx0aXNlbGVjdGZpZWxkLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0TXVsdGlzZWxlY3RmaWVsZCcsXG4gICAgaW5wdXRzOiBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGlvbnMnLCdhY3RpdmVDaGlsZFRhYkluZGV4JywnYWN0aXZlQ291bnRlcicsJ2FjdGl2ZUVycm9yJywnYWN0aXZlRXJyb3JzVHBsJywnYWN0aXZlSXRlbScsJ2FmdGVyQm9keUVsJywnYWZ0ZXJMYWJlbFRleHRUcGwnLCdhZnRlckxhYmVsVHBsJywnYWZ0ZXJTdWJUcGwnLCdhbGlnbk9uU2Nyb2xsJywnYWxpZ25UYXJnZXQnLCdhbGxvd0JsYW5rJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuY2hvclNpemUnLCdhbmltYXRlU2hhZG93JywnYXBwZW5kT25seScsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUVycm9yVGV4dCcsJ2FyaWFIZWxwJywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRGVzdHJveScsJ2F1dG9FbCcsJ2F1dG9GaXRFcnJvcnMnLCdhdXRvUmVuZGVyJywndW5kZWZpbmVkJywnYXV0b1Nob3cnLCdiYXNlQm9keUNscycsJ2Jhc2VDbHMnLCdiZWZvcmVCb2R5RWwnLCdiZWZvcmVMYWJlbFRleHRUcGwnLCdiZWZvcmVMYWJlbFRwbCcsJ2JlZm9yZVN1YlRwbCcsJ2JpbmQnLCdibGFua1RleHQnLCdib3JkZXInLCdidWJibGVFdmVudHMnLCdjaGlsZEVscycsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tYmluZUVycm9ycycsJ2NvbWJpbmVMYWJlbHMnLCdjb21wb25lbnRDbHMnLCdjb21wb25lbnRMYXlvdXQnLCdjb25zdHJhaW4nLCdjb25zdHJhaW50SW5zZXRzJywnY29uc3RyYWluVG8nLCdjb250ZW50RWwnLCdjb250cm9sbGVyJywnZGF0YScsJ2RkUmVvcmRlcicsJ2RlZmF1bHRBbGlnbicsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VHlwZScsJ2RlbGltaXRlcicsJ2RldGFjaE9uUmVtb3ZlJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2Rpc3BsYXlGaWVsZCcsJ2RvY2snLCdkcmFnZ2FibGUnLCdkcmFnR3JvdXAnLCdkcmFnVGV4dCcsJ2Ryb3BHcm91cCcsJ2Vycm9yTXNnQ2xzJywnZmllbGRCb2R5Q2xzJywnZmllbGREZWZhdWx0cycsJ2ZpZWxkTGFiZWwnLCdmaXhlZCcsJ2ZsZXgnLCdmbG9hdGluZycsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCdmb3JtQmluZCcsJ2Zvcm1JdGVtQ2xzJywnZnJhbWUnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlRW1wdHlMYWJlbCcsJ2hpZGVMYWJlbCcsJ2hpZGVNb2RlJywnaHRtbCcsJ2lkJywnaW5hY3RpdmVDaGlsZFRhYkluZGV4JywnaW52YWxpZENscycsJ2l0ZW1JZCcsJ2l0ZW1zJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xhYmVsYWJsZVJlbmRlclRwbCcsJ2xhYmVsQWxpZ24nLCdsYWJlbEF0dHJUcGwnLCdsYWJlbENscycsJ2xhYmVsQ2xzRXh0cmEnLCdsYWJlbENvbm5lY3RvcicsJ2xhYmVsUGFkJywnbGFiZWxTZXBhcmF0b3InLCdsYWJlbFN0eWxlJywnbGFiZWxXaWR0aCcsJ2xheW91dCcsJ2xpcXVpZExheW91dCcsJ2xpc3RDb25maWcnLCdsaXN0ZW5lcnMnLCdsaXZlRHJhZycsJ2xvYWRlcicsJ21hcmdpbicsJ21hc2tEZWZhdWx0cycsJ21hc2tFbGVtZW50JywnbWF4SGVpZ2h0JywnbWF4U2VsZWN0aW9ucycsJ21heFNlbGVjdGlvbnNUZXh0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5TZWxlY3Rpb25zJywnbWluU2VsZWN0aW9uc1RleHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbXNnVGFyZ2V0JywnbmFtZScsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGFnZVNpemUnLCdwbHVnaW5zJywncHJldmVudE1hcmsnLCdwdWJsaXNoZXMnLCdyZWZlcmVuY2UnLCdyZWZlcmVuY2VIb2xkZXInLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXNldEZvY3VzUG9zaXRpb24nLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVzJywnc2F2ZURlbGF5Jywnc2Nyb2xsYWJsZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0b3JlJywnc3R5bGUnLCdzdWJtaXRWYWx1ZScsJ3N1c3BlbmRMYXlvdXQnLCd0YWJHdWFyZCcsJ3RhYkluZGV4JywndGJhcicsJ3RpdGxlJywndG9Gcm9udE9uU2hvdycsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VpQ2xzJywndXNlckNscycsJ3ZhbGlkYXRlT25DaGFuZ2UnLCd2YWxpZGF0aW9uJywndmFsaWRhdGlvbkZpZWxkJywndmFsdWUnLCd2YWx1ZUZpZWxkJywndmFsdWVQdWJsaXNoRXZlbnQnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdhY3RpdmF0ZScsJ2FkZCcsJ2FkZGVkJywnYWZ0ZXJsYXlvdXQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVhZGQnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzdHJveScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVyZW1vdmUnLCdiZWZvcmVyZW5kZXInLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RhdGVyZXN0b3JlJywnYmVmb3Jlc3RhdGVzYXZlJywnYmx1cicsJ2JveHJlYWR5JywnY2hhbmdlJywnY2hpbGRtb3ZlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXJ0eWNoYW5nZScsJ2Rpc2FibGUnLCdlbmFibGUnLCdlcnJvcmNoYW5nZScsJ2ZpZWxkZXJyb3JjaGFuZ2UnLCdmaWVsZHZhbGlkaXR5Y2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hpZGUnLCdtb3ZlJywncmVtb3ZlJywncmVtb3ZlZCcsJ3JlbmRlcicsJ3Jlc2l6ZScsJ3Nob3cnLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLCd2YWxpZGl0eWNoYW5nZScsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0TXVsdGlzZWxlY3RmaWVsZENvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dE11bHRpc2VsZWN0ZmllbGRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aW9ucycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVDb3VudGVyJywnYWN0aXZlRXJyb3InLCdhY3RpdmVFcnJvcnNUcGwnLCdhY3RpdmVJdGVtJywnYWZ0ZXJCb2R5RWwnLCdhZnRlckxhYmVsVGV4dFRwbCcsJ2FmdGVyTGFiZWxUcGwnLCdhZnRlclN1YlRwbCcsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93QmxhbmsnLCdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsJ2Fsd2F5c09uVG9wJywnYW5jaG9yJywnYW5jaG9yU2l6ZScsJ2FuaW1hdGVTaGFkb3cnLCdhcHBlbmRPbmx5JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhRXJyb3JUZXh0JywnYXJpYUhlbHAnLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9EZXN0cm95JywnYXV0b0VsJywnYXV0b0ZpdEVycm9ycycsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VCb2R5Q2xzJywnYmFzZUNscycsJ2JlZm9yZUJvZHlFbCcsJ2JlZm9yZUxhYmVsVGV4dFRwbCcsJ2JlZm9yZUxhYmVsVHBsJywnYmVmb3JlU3ViVHBsJywnYmluZCcsJ2JsYW5rVGV4dCcsJ2JvcmRlcicsJ2J1YmJsZUV2ZW50cycsJ2NoaWxkRWxzJywnY2xzJywnY29sdW1uV2lkdGgnLCdjb21iaW5lRXJyb3JzJywnY29tYmluZUxhYmVscycsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGRSZW9yZGVyJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUeXBlJywnZGVsaW1pdGVyJywnZGV0YWNoT25SZW1vdmUnLCdkaXNhYmxlZCcsJ2Rpc2FibGVkQ2xzJywnZGlzcGxheUZpZWxkJywnZG9jaycsJ2RyYWdnYWJsZScsJ2RyYWdHcm91cCcsJ2RyYWdUZXh0JywnZHJvcEdyb3VwJywnZXJyb3JNc2dDbHMnLCdmaWVsZEJvZHlDbHMnLCdmaWVsZERlZmF1bHRzJywnZmllbGRMYWJlbCcsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNhYmxlQ29udGFpbmVyJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ2Zvcm1CaW5kJywnZm9ybUl0ZW1DbHMnLCdmcmFtZScsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVFbXB0eUxhYmVsJywnaGlkZUxhYmVsJywnaGlkZU1vZGUnLCdodG1sJywnaWQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbnZhbGlkQ2xzJywnaXRlbUlkJywnaXRlbXMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGFiZWxhYmxlUmVuZGVyVHBsJywnbGFiZWxBbGlnbicsJ2xhYmVsQXR0clRwbCcsJ2xhYmVsQ2xzJywnbGFiZWxDbHNFeHRyYScsJ2xhYmVsQ29ubmVjdG9yJywnbGFiZWxQYWQnLCdsYWJlbFNlcGFyYXRvcicsJ2xhYmVsU3R5bGUnLCdsYWJlbFdpZHRoJywnbGF5b3V0JywnbGlxdWlkTGF5b3V0JywnbGlzdENvbmZpZycsJ2xpc3RlbmVycycsJ2xpdmVEcmFnJywnbG9hZGVyJywnbWFyZ2luJywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXhIZWlnaHQnLCdtYXhTZWxlY3Rpb25zJywnbWF4U2VsZWN0aW9uc1RleHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pblNlbGVjdGlvbnMnLCdtaW5TZWxlY3Rpb25zVGV4dCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCdtc2dUYXJnZXQnLCduYW1lJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3BhZGRpbmcnLCdwYWdlU2l6ZScsJ3BsdWdpbnMnLCdwcmV2ZW50TWFyaycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCd1bmRlZmluZWQnLCdyZW5kZXJUbycsJ3JlbmRlclRwbCcsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RvcmUnLCdzdHlsZScsJ3N1Ym1pdFZhbHVlJywnc3VzcGVuZExheW91dCcsJ3RhYkd1YXJkJywndGFiSW5kZXgnLCd0YmFyJywndGl0bGUnLCd0b0Zyb250T25TaG93JywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmFsaWRhdGVPbkNoYW5nZScsJ3ZhbGlkYXRpb24nLCd2YWxpZGF0aW9uRmllbGQnLCd2YWx1ZScsJ3ZhbHVlRmllbGQnLCd2YWx1ZVB1Ymxpc2hFdmVudCcsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dpZHRoJywneHR5cGUnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ011bHRpc2VsZWN0ZmllbGQoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2FjdGl2YXRlJywnYWRkJywnYWRkZWQnLCdhZnRlcmxheW91dCcsJ2FmdGVybGF5b3V0YW5pbWF0aW9uJywnYWZ0ZXJyZW5kZXInLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWFkZCcsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXJlbW92ZScsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdibHVyJywnYm94cmVhZHknLCdjaGFuZ2UnLCdjaGlsZG1vdmUnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2RpcnR5Y2hhbmdlJywnZGlzYWJsZScsJ2VuYWJsZScsJ2Vycm9yY2hhbmdlJywnZmllbGRlcnJvcmNoYW5nZScsJ2ZpZWxkdmFsaWRpdHljaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ21vdmUnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2hvdycsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsJ3ZhbGlkaXR5Y2hhbmdlJyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ211bHRpc2VsZWN0ZmllbGQnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ011bHRpc2VsZWN0ZmllbGQoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==