"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mocks_1 = require("./mocks");
var RacesComponent = (function () {
    function RacesComponent() {
        this.heading = "Ultra Racing Schedule";
        this.cash = 10000;
    }
    RacesComponent.prototype.ngOnInit = function () {
        this.races = mocks_1.RACES;
    };
    RacesComponent.prototype.totalCost = function () {
        var sum = 0;
        for (var _i = 0, _a = this.races; _i < _a.length; _i++) {
            var race = _a[_i];
            if (race.isRacing)
                sum += race.entryFee;
        }
        return sum;
    };
    RacesComponent.prototype.cashLeft = function () {
        return this.cash - this.totalCost();
    };
    return RacesComponent;
}());
RacesComponent = __decorate([
    core_1.Component({
        selector: 'my-races',
        templateUrl: 'app/races.component.html',
        styleUrls: ['app/races.component.css']
    })
], RacesComponent);
exports.RacesComponent = RacesComponent;
//# sourceMappingURL=races.component.js.map