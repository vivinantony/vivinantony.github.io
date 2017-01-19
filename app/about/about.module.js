"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var about_component_1 = require('./about.component');
var about_routing_module_1 = require('./about-routing.module');
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, about_routing_module_1.AboutRoutingModule],
            declarations: [about_component_1.AboutComponent],
            exports: [about_component_1.AboutComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCxxQ0FBbUMsd0JBQXdCLENBQUMsQ0FBQTtBQU81RDtJQUFBO0lBQTJCLENBQUM7SUFMNUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHlDQUFrQixDQUFDO1lBQzNDLFlBQVksRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUMxQixDQUFDOzttQkFBQTtJQUN5QixrQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixtQkFBVyxjQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Fib3V0L2Fib3V0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBYm91dFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Fib3V0LXJvdXRpbmcubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQWJvdXRSb3V0aW5nTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBYm91dENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0Fib3V0Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRNb2R1bGUgeyB9XHJcbiJdfQ==
