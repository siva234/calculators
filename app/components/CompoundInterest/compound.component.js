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
var CompoundComponent = (function () {
    function CompoundComponent() {
        this.amount = 1000;
        this.interest = 4;
        this.time = 1;
        this.pinterest = (this.amount * this.interest) / 100;
        this.tamount = this.amount + this.pinterest;
    }
    CompoundComponent.prototype.compoundInterestCalc = function () {
        this.tamount = this.amount;
        this.extra = 0;
        for (var i = 0; i < this.time; i++) {
            this.pinterest = (this.tamount * this.interest) / 100;
            this.tamount = this.tamount + this.pinterest;
            this.extra = this.extra + this.pinterest;
        }
        this.pinterest = this.extra;
    };
    CompoundComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'compound',
            templateUrl: 'compound.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CompoundComponent);
    return CompoundComponent;
}());
exports.CompoundComponent = CompoundComponent;
//# sourceMappingURL=compound.component.js.map