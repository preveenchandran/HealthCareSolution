"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var welcome_component_1 = require("./home/welcome.component");
var patient_info_component_1 = require("./patientInfo/patient-info.component");
var onlinePatientEntry_component_1 = require("./onlinePatientEntry/onlinePatientEntry.component");
var searchViewPatList_comp_1 = require("./patient/searchViewPatList.comp");
var routes = [
    { path: 'Welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'PatientInfo', component: patient_info_component_1.PatientInfoComponent },
    { path: 'OnlinePatientEntry', component: onlinePatientEntry_component_1.OnlinePatientEntryComponent },
    { path: 'SearchViewPatList', component: searchViewPatList_comp_1.SearchViewPatListComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
exports.Routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map