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
/**
 * Created by Siva on 15-04-2017.
 */
var core_1 = require('@angular/core');
var SimpleComponent = (function () {
    function SimpleComponent() {
        this.amount = 1000;
        this.interest = 4;
        this.time = 1;
        this.pinterest = (this.amount * this.interest * this.time) / 100;
        this.tamount = this.amount + this.pinterest;
    }
    SimpleComponent.prototype.simpleInterestCalc = function () {
        this.pinterest = (this.amount * this.interest * this.time) / 100;
        this.tamount = this.amount + this.pinterest;
    };
    SimpleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'simple',
            templateUrl: 'simple.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleComponent);
    return SimpleComponent;
}());
exports.SimpleComponent = SimpleComponent;
//# sourceMappingURL=simple.component.js.map