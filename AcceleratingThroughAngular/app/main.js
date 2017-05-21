"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var AppComponent = (function () {
    function AppComponent() {
        this.heading = "Ultra Racing Schedule";
        this.race = {
            "id": 1,
            "name": "Daytona Thunderdome",
            "date": new Date('2512-01-04T14:00:00'),
            "about": "Race through the ruins of an ancient Florida battle arena.",
            "entryFee": 3200
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'racing-app',
        template: "\n    <h1>{{ heading }}</h1>\n    <h2>{{race.name}}</h2>\n    <p>{{race.date}}</p>\n    <p>{{race.about}}</p>\n  "
    })
], AppComponent);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map