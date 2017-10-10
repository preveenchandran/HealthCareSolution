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
var animations_1 = require("@angular/animations");
var AddEditPatientComponent = /** @class */ (function () {
    function AddEditPatientComponent(formBuilder, searchViewPatListService, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.searchViewPatListService = searchViewPatListService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isUpdateStyle = false;
        this.accordionHide = false;
        this.show = true;
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
    Object.defineProperty(AddEditPatientComponent.prototype, "stateName", {
        get: function () {
            return this.show ? 'show' : 'hide';
        },
        enumerable: true,
        configurable: true
    });
    AddEditPatientComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    AddEditPatientComponent = __decorate([
        core_1.Component({
            templateUrl: "app/patient/addEditPatient.html",
            selector: "patient-addedit",
            styles: ['.hideClass { display: none; } .accordionHide{display: none;transition: visibility 0.5s, opacity 0.5s linear;}'],
            animations: [
                animations_1.trigger('popOverState', [
                    animations_1.state('show', animations_1.style({
                        opacity: 1,
                        height: 'auto'
                    })),
                    animations_1.state('hide', animations_1.style({
                        opacity: 0,
                        height: '0px'
                    })),
                    animations_1.transition('show => hide', animations_1.animate('600ms ease-out')),
                    animations_1.transition('hide => show', animations_1.animate('1000ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, searchViewPatList_service_1.SearchViewPatListService, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
    ], AddEditPatientComponent);
    return AddEditPatientComponent;
    var _a, _b, _c;
}());
exports.AddEditPatientComponent = AddEditPatientComponent;
//# sourceMappingURL=addEditPatient.component.js.map