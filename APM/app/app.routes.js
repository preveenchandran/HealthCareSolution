"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var welcome_component_1 = require("./home/welcome.component");
var patient_info_component_1 = require("./patientInfo/patient-info.component");
var routes = [
    { path: 'Welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'PatientInfo', component: patient_info_component_1.PatientInfoComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
exports.Routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map