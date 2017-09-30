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
var router_1 = require("@angular/router");
var AddEditPatientComponent = (function () {
    function AddEditPatientComponent(formBuilder, searchViewPatListService, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.searchViewPatListService = searchViewPatListService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isUpdateStyle = false;
        this.accordionHide = false;
        this.firstName = new forms_1.FormControl('', [forms_1.Validators.required, , forms_1.Validators.minLength(2)]);
        this.lastName = new forms_1.FormControl('');
        this.addPatientForm = this.formBuilder.group({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }
    AddEditPatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.selectedPatientId = params['id'];
            if (_this.selectedPatientId) {
                _this.getPatient(_this.selectedPatientId);
                _this.isUpdateStyle = true;
            }
        });
    };
    AddEditPatientComponent.prototype.getPatient = function (selectedPatientId) {
        var _this = this;
        this.searchViewPatListService.getPatient(selectedPatientId).subscribe(function (selectedPatient) {
            _this.selectedPatient = selectedPatient;
            _this.setFormValue();
        });
    };
    AddEditPatientComponent.prototype.setFormValue = function () {
        this.addPatientForm.setValue({
            firstName: this.selectedPatient.FirstName,
            lastName: this.selectedPatient.LastName
        });
    };
    AddEditPatientComponent.prototype.addNewPatient = function (newPat) {
        var _this = this;
        this.searchViewPatListService.addNewPatient(newPat).subscribe(function (x) {
            _this.router.navigate(['/SearchViewPatList']);
        });
    };
    AddEditPatientComponent.prototype.updatePatient = function (updatePat) {
        var _this = this;
        this.searchViewPatListService.updatePatient(this.selectedPatientId, updatePat).subscribe(function (x) {
            _this.router.navigate(['/SearchViewPatList']);
        });
    };
    AddEditPatientComponent.prototype.accordionCollapse = function () {
        this.accordionHide = !this.accordionHide;
    };
    AddEditPatientComponent = __decorate([
        core_1.Component({
            templateUrl: "app/patient/addEditPatient.html",
            selector: "patient-addedit",
            styles: ['.hideClass { display: none; } .accordionHide{display: none;transition: visibility 0.5s, opacity 0.5s linear;}']
            //animations: [
            //    trigger('popOverState', [
            //        state('show', style({
            //            opacity: 1
            //        })),
            //        state('hide', style({
            //            opacity: 0
            //        })),
            //        transition('show => hide', animate('600ms ease-out')),
            //        transition('hide => show', animate('1000ms ease-in'))
            //    ])
            //]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            searchViewPatList_service_1.SearchViewPatListService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AddEditPatientComponent);
    return AddEditPatientComponent;
}());
exports.AddEditPatientComponent = AddEditPatientComponent;
//# sourceMappingURL=addEditPatient.component.js.map