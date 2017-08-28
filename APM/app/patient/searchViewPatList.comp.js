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
var searchViewPatList_service_1 = require("./searchViewPatList.service");
var SearchViewPatListComponent = (function () {
    function SearchViewPatListComponent(searchViewPatListService) {
        this.searchViewPatListService = searchViewPatListService;
    }
    SearchViewPatListComponent.prototype.ngOnInit = function () {
        this.getAllPatient();
    };
    SearchViewPatListComponent.prototype.getAllPatient = function () {
        var _this = this;
        this.patients = [{
                LastName: "Asdasd",
                FirstName: "asd"
            }];
        this.searchViewPatListService.getAllPatient().subscribe(function (patList) {
            _this.patients = patList;
            _this.fullListPatients = _this.patients;
        });
        //console.log(this.errorMsg);
    };
    SearchViewPatListComponent.prototype.searchPatient = function (value, source) {
        this.filteredPatients = this.patients;
        switch (source.target.id.toLowerCase()) {
            case "firstname":
                this.filteredPatients = this.filteredPatients.filter(function (x) { return x.FirstName.toLowerCase().includes(value.toLowerCase()); });
                break;
            case "lastname":
                this.filteredPatients = this.filteredPatients.filter(function (x) { return x.LastName.toLowerCase().includes(value.toLowerCase()); });
                break;
            default:
        }
        this.patients = this.filteredPatients;
    };
    SearchViewPatListComponent = __decorate([
        core_1.Component({
            templateUrl: "app/patient/searchViewPatList.comp.html",
            selector: "search-view"
        }),
        __metadata("design:paramtypes", [searchViewPatList_service_1.SearchViewPatListService])
    ], SearchViewPatListComponent);
    return SearchViewPatListComponent;
}());
exports.SearchViewPatListComponent = SearchViewPatListComponent;
//# sourceMappingURL=searchViewPatList.comp.js.map