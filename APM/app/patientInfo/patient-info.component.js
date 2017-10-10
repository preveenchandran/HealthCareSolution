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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var patient_info_service_1 = require("./patient-info.service");
var PatientInfoComponent = /** @class */ (function () {
    function PatientInfoComponent(patientInfoService) {
        this.patientInfoService = patientInfoService;
    }
    PatientInfoComponent.prototype.ngOnInit = function () {
        this.getPatientInfo();
    };
    PatientInfoComponent.prototype.getPatientInfo = function () {
        var _this = this;
        this.pageTitle = "Hello";
        this.patientInfoService.getPatientInfo().subscribe(function (patInfo) { return _this.patientInfo = patInfo; }, function (error) { return _this.errorMessage = error; });
        // console.log(this.patientInfo[0].LastName);
    };
    PatientInfoComponent.prototype.clicked = function () {
        console.log(this.patientInfo[0].LastName = "Changed");
    };
    PatientInfoComponent = __decorate([
        core_1.Component({
            templateUrl: "app/patientInfo/patient-info.component.html",
            selector: "patient-info"
        }),
        __metadata("design:paramtypes", [patient_info_service_1.PatientInfoService])
    ], PatientInfoComponent);
    return PatientInfoComponent;
}());
exports.PatientInfoComponent = PatientInfoComponent;
//# sourceMappingURL=patient-info.component.js.map