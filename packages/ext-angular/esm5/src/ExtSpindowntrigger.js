import * as tslib_1 from "tslib";
//import EWCSpindowntrigger from '../dist/ext-spindowntrigger.component.js';
//inputs: (new EWCSpindowntrigger()).properties,
import EWCSpindowntrigger from '@sencha/ext-web-components/dist/ext-spindowntrigger.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtSpindowntriggerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSpindowntriggerComponent, _super);
    function ExtSpindowntriggerComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'disabled', 'undefined', 'field', 'flex', 'floated', 'focusCls', 'focusOnTap', 'group', 'handler', 'height', 'hidden', 'hideMode', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'relative', 'renderTo', 'repeat', 'ripple', 'scope', 'session', 'shadow', 'shareableName', 'shim', 'side', 'style', 'toFrontOnShow', 'touchAction', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'x', 'y',], (new EWCSpindowntrigger()).events, ['ready', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforetofront', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'tofront', 'widthchange',], vc) || this;
        _this.xtype = 'spindowntrigger';
        return _this;
    }
    ExtSpindowntriggerComponent_1 = ExtSpindowntriggerComponent;
    ExtSpindowntriggerComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSpindowntriggerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSpindowntriggerComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSpindowntriggerComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSpindowntriggerComponent_1;
    ExtSpindowntriggerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtSpindowntriggerComponent = ExtSpindowntriggerComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtSpindowntrigger',
            inputs: ['renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'disabled', 'undefined', 'field', 'flex', 'floated', 'focusCls', 'focusOnTap', 'group', 'handler', 'height', 'hidden', 'hideMode', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'relative', 'renderTo', 'repeat', 'ripple', 'scope', 'session', 'shadow', 'shareableName', 'shim', 'side', 'style', 'toFrontOnShow', 'touchAction', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'x', 'y',],
            outputs: ['ready', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforetofront', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'tofront', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSpindowntriggerComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtSpindowntriggerComponent);
    return ExtSpindowntriggerComponent;
}(EngBase));
export { ExtSpindowntriggerComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCSpindowntrigger()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0U3BpbmRvd250cmlnZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9FeHRTcGluZG93bnRyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUE0RTtBQUM1RSxnREFBZ0Q7QUFDaEQsT0FBTyxrQkFBa0IsTUFBTSxrRUFBa0UsQ0FBQztBQUNsRyxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEM7SUFBaUQsdURBQU87SUFDcEQscUNBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFIeEIsWUFLSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsWUFBWSxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsRUFDbnlCLENBQUMsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUNqQyxDQUFDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBRSxFQUMvTixFQUFFLENBQ0wsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUE7O0lBQ2xDLENBQUM7b0NBZlEsMkJBQTJCO0lBaUI3Qiw4Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxxREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxpREFBVyxHQUFsQixVQUFtQixPQUFPO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLGlEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkE3QlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFRO2dCQUN6QixnQkFBZ0I7O0lBSmYsMkJBQTJCO1FBUHZDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsWUFBWSxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUU7WUFDM3lCLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBRTtZQUN4TyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNkJBQTJCLEVBQTNCLENBQTJCLENBQUMsRUFBQyxDQUFDO1lBQzNGLFFBQVEsRUFBRSwyQkFBMkI7U0FDeEMsQ0FBQztRQUlPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtPQUgxQiwyQkFBMkIsQ0FnQ3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQWhDRCxDQUFpRCxPQUFPLEdBZ0N2RDtTQWhDWSwyQkFBMkI7QUFtQ3hDLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLElBQUk7QUFDSix5Q0FBeUM7QUFFekMscURBQXFEO0FBQ3JELHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDU3BpbmRvd250cmlnZ2VyIGZyb20gJy4uL2Rpc3QvZXh0LXNwaW5kb3dudHJpZ2dlci5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDU3BpbmRvd250cmlnZ2VyKCkpLnByb3BlcnRpZXMsXG5pbXBvcnQgRVdDU3BpbmRvd250cmlnZ2VyIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzL2Rpc3QvZXh0LXNwaW5kb3dudHJpZ2dlci5jb21wb25lbnQuanMnO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dFNwaW5kb3dudHJpZ2dlcicsXG4gICAgaW5wdXRzOiBbJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhbGlnblNlbGYnLCdhbHdheXNPblRvcCcsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdiaW5kJywnYm9yZGVyJywnY2xzJywnY29uc3RyYWluQWxpZ24nLCdjb250cm9sbGVyJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkaXNhYmxlZCcsJ3VuZGVmaW5lZCcsJ2ZpZWxkJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c0NscycsJ2ZvY3VzT25UYXAnLCdncm91cCcsJ2hhbmRsZXInLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlTW9kZScsJ2ljb25DbHMnLCdpZCcsJ2luc3RhbmNlQ2xzJywnaXRlbUlkJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xpc3RlbmVycycsJ21hcmdpbicsJ25hbWUnLCduYW1lYWJsZScsJ3BsdWdpbnMnLCdwdWJsaXNoZXMnLCdyZWZlcmVuY2UnLCdyZWxhdGl2ZScsJ3JlbmRlclRvJywncmVwZWF0JywncmlwcGxlJywnc2NvcGUnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaWRlJywnc3R5bGUnLCd0b0Zyb250T25TaG93JywndG91Y2hBY3Rpb24nLCd0cmFuc2xhdGFibGUnLCd0cmlnZ2VycycsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1c2VyQ2xzJywndmlld01vZGVsJywnd2lkdGgnLCd4JywneScsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmV0b2Zyb250JywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnZGlzYWJsZWRjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywndG9mcm9udCcsJ3dpZHRoY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRTcGluZG93bnRyaWdnZXJDb21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRTcGluZG93bnRyaWdnZXJDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FsaWduU2VsZicsJ2Fsd2F5c09uVG9wJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2JpbmQnLCdib3JkZXInLCdjbHMnLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRyb2xsZXInLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2Rpc2FibGVkJywndW5kZWZpbmVkJywnZmllbGQnLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzQ2xzJywnZm9jdXNPblRhcCcsJ2dyb3VwJywnaGFuZGxlcicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVNb2RlJywnaWNvbkNscycsJ2lkJywnaW5zdGFuY2VDbHMnLCdpdGVtSWQnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGlzdGVuZXJzJywnbWFyZ2luJywnbmFtZScsJ25hbWVhYmxlJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlbGF0aXZlJywncmVuZGVyVG8nLCdyZXBlYXQnLCdyaXBwbGUnLCdzY29wZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3NpZGUnLCdzdHlsZScsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RyYW5zbGF0YWJsZScsJ3RyaWdnZXJzJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd2aWV3TW9kZWwnLCd3aWR0aCcsJ3gnLCd5JyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NTcGluZG93bnRyaWdnZXIoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2Rpc2FibGVkY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ3RvZnJvbnQnLCd3aWR0aGNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdzcGluZG93bnRyaWdnZXInXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ1NwaW5kb3dudHJpZ2dlcigpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19