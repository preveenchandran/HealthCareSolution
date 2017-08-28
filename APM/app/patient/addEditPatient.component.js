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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var searchViewPatList_service_1 = require("./searchViewPatList.service");
var AddEditPatientComponent = (function () {
    function AddEditPatientComponent(formBuilder, searchViewPatListService) {
        this.formBuilder = formBuilder;
        this.searchViewPatListService = searchViewPatListService;
    }
    AddEditPatientComponent.prototype.ngOnInit = function () {
        this.addPatientForm = this.formBuilder.group({
            firstName: '',
            lastName: ''
        });
        this.getAllPatient();
    };
    AddEditPatientComponent.prototype.getAllPatient = function () {
        var _this = this;
        this.patients = [{
                LastName: "Asdasd",
                FirstName: "asd"
            }];
        this.searchViewPatListService.getAllPatient().subscribe(function (patList) { return _this.patients = patList; });
    };
    AddEditPatientComponent.prototype.addNewPatient = function (newPat) {
        var _this = this;
        this.searchViewPatListService.addNewPatient(newPat).subscribe(function (x) {
            _this.getAllPatient();
        });
    };
    AddEditPatientComponent = __decorate([
        core_1.Component({
            templateUrl: "app/patient/addEditPatient.html",
            selector: "patient-addedit"
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, searchViewPatList_service_1.SearchViewPatListService])
    ], AddEditPatientComponent);
    return AddEditPatientComponent;
}());
exports.AddEditPatientComponent = AddEditPatientComponent;
//# sourceMappingURL=addEditPatient.component.js.map