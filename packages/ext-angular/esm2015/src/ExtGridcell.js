var ExtGridcellComponent_1;
import * as tslib_1 from "tslib";
//import EWCGridcell from '../dist/ext-gridcell.component.js';
//inputs: (new EWCGridcell()).properties,
import EWCGridcell from '@sencha/ext-web-components/dist/ext-gridcell.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtGridcellComponent = ExtGridcellComponent_1 = class ExtGridcellComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'align', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'bodyCls', 'bodyStyle', 'border', 'cellCls', 'cls', 'column', 'constrainAlign', 'controller', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'encodeHtml', 'undefined', 'flex', 'floated', 'focusCls', 'formatter', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rawValue', 'record', 'reference', 'relative', 'renderer', 'renderTo', 'ripple', 'scope', 'selectable', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'toolDefaults', 'tools', 'touchAction', 'tpl', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width', 'x', 'y', 'zeroValue',], (new EWCGridcell()).events, ['ready', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforetofront', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'tofront', 'widthchange',], vc);
        this.xtype = 'gridcell';
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
ExtGridcellComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtGridcellComponent = ExtGridcellComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ExtGridcell',
        inputs: ['renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'align', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'bodyCls', 'bodyStyle', 'border', 'cellCls', 'cls', 'column', 'constrainAlign', 'controller', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'encodeHtml', 'undefined', 'flex', 'floated', 'focusCls', 'formatter', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rawValue', 'record', 'reference', 'relative', 'renderer', 'renderTo', 'ripple', 'scope', 'selectable', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'toolDefaults', 'tools', 'touchAction', 'tpl', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width', 'x', 'y', 'zeroValue',],
        outputs: ['ready', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforetofront', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'tofront', 'widthchange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtGridcellComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
], ExtGridcellComponent);
export { ExtGridcellComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCGridcell()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0R3JpZGNlbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL0V4dEdyaWRjZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOERBQThEO0FBQzlELHlDQUF5QztBQUN6QyxPQUFPLFdBQVcsTUFBTSwyREFBMkQsQ0FBQztBQUNwRixPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEMsSUFBYSxvQkFBb0IsNEJBQWpDLE1BQWEsb0JBQXFCLFNBQVEsT0FBTztJQUM3QyxZQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBRXBCLEtBQUssQ0FDRCxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxZQUFZLEVBQUMsc0JBQXNCLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxhQUFh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QUFDLElBQUksRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxXQUFXLEVBQUU7UUFDMzVCLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBRTtRQUN4TyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBb0IsQ0FBQyxFQUFDLENBQUM7UUFDcEYsUUFBUSxFQUFFLDJCQUEyQjtLQUN4QyxDQUFDO0lBSU8sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO0dBSDFCLG9CQUFvQixDQWdDaEM7U0FoQ1ksb0JBQW9CO0FBbUNqQyw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpRkFBaUY7QUFDakYsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQixJQUFJO0FBQ0oseUNBQXlDO0FBRXpDLDhDQUE4QztBQUM5Qyx5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ0dyaWRjZWxsIGZyb20gJy4uL2Rpc3QvZXh0LWdyaWRjZWxsLmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NHcmlkY2VsbCgpKS5wcm9wZXJ0aWVzLFxuaW1wb3J0IEVXQ0dyaWRjZWxsIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzL2Rpc3QvZXh0LWdyaWRjZWxsLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0R3JpZGNlbGwnLFxuICAgIGlucHV0czogWydyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWxpZ24nLCdhbGlnblNlbGYnLCdhbHdheXNPblRvcCcsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdiaW5kJywnYm9keUNscycsJ2JvZHlTdHlsZScsJ2JvcmRlcicsJ2NlbGxDbHMnLCdjbHMnLCdjb2x1bW4nLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRyb2xsZXInLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmF1bHRUb29sV2VpZ2h0cycsJ2Rpc2FibGVkJywnZW5jb2RlSHRtbCcsJ3VuZGVmaW5lZCcsJ2ZsZXgnLCdmbG9hdGVkJywnZm9jdXNDbHMnLCdmb3JtYXR0ZXInLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlTW9kZScsJ2lkJywnaW5zdGFuY2VDbHMnLCdpdGVtSWQnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGlzdGVuZXJzJywnbWFyZ2luJywnbmFtZScsJ25hbWVhYmxlJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3Jhd1ZhbHVlJywncmVjb3JkJywncmVmZXJlbmNlJywncmVsYXRpdmUnLCdyZW5kZXJlcicsJ3JlbmRlclRvJywncmlwcGxlJywnc2NvcGUnLCdzZWxlY3RhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc3R5bGUnLCd0b0Zyb250T25TaG93JywndG9vbERlZmF1bHRzJywndG9vbHMnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RyYW5zbGF0YWJsZScsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1c2VyQ2xzJywndmFsdWUnLCd2aWV3TW9kZWwnLCd3aWR0aCcsJ3gnLCd5JywnemVyb1ZhbHVlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdkaXNhYmxlZGNoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCd0b2Zyb250Jywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEdyaWRjZWxsQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0R3JpZGNlbGxDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FsaWduJywnYWxpZ25TZWxmJywnYWx3YXlzT25Ub3AnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYmluZCcsJ2JvZHlDbHMnLCdib2R5U3R5bGUnLCdib3JkZXInLCdjZWxsQ2xzJywnY2xzJywnY29sdW1uJywnY29uc3RyYWluQWxpZ24nLCdjb250cm9sbGVyJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0VG9vbFdlaWdodHMnLCdkaXNhYmxlZCcsJ2VuY29kZUh0bWwnLCd1bmRlZmluZWQnLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzQ2xzJywnZm9ybWF0dGVyJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdpZCcsJ2luc3RhbmNlQ2xzJywnaXRlbUlkJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xpc3RlbmVycycsJ21hcmdpbicsJ25hbWUnLCduYW1lYWJsZScsJ3BsdWdpbnMnLCdwdWJsaXNoZXMnLCdyYXdWYWx1ZScsJ3JlY29yZCcsJ3JlZmVyZW5jZScsJ3JlbGF0aXZlJywncmVuZGVyZXInLCdyZW5kZXJUbycsJ3JpcHBsZScsJ3Njb3BlJywnc2VsZWN0YWJsZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3N0eWxlJywndG9Gcm9udE9uU2hvdycsJ3Rvb2xEZWZhdWx0cycsJ3Rvb2xzJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cmFuc2xhdGFibGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3ZhbHVlJywndmlld01vZGVsJywnd2lkdGgnLCd4JywneScsJ3plcm9WYWx1ZScsXSxcbiAgICAgICAgICAgIChuZXcgRVdDR3JpZGNlbGwoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2Rpc2FibGVkY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ3RvZnJvbnQnLCd3aWR0aGNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdncmlkY2VsbCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDR3JpZGNlbGwoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==