"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var product_list_component_1 = require("./products/product-list.component");
var patient_info_component_1 = require("./patientInfo/patient-info.component");
var header_component_1 = require("./shared/header/header.component");
var welcome_component_1 = require("./home/welcome.component");
var onlinePatientEntry_component_1 = require("./onlinePatientEntry/onlinePatientEntry.component");
var searchViewPatList_comp_1 = require("./patient/searchViewPatList.comp");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routes_1.Routing
            ],
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                patient_info_component_1.PatientInfoComponent,
                header_component_1.HeaderComponent,
                welcome_component_1.WelcomeComponent,
                onlinePatientEntry_component_1.OnlinePatientEntryComponent,
                searchViewPatList_comp_1.SearchViewPatListComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map