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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var SearchViewPatListService = /** @class */ (function () {
    function SearchViewPatListService(http) {
        this.http = http;
    }
    SearchViewPatListService.prototype.getAllPatient = function () {
        return this.http.get("http://localhost/HCAPI/api/patient")
            .map(function (response) { return response.json(); });
    };
    SearchViewPatListService.prototype.getPatient = function (patientId) {
        return this.http.get("http://localhost/HCAPI/api/patient/" + patientId)
            .map(function (response) { return response.json(); });
    };
    SearchViewPatListService.prototype.addNewPatient = function (newPatient) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post("http://localhost/HCAPI/api/patient", JSON.stringify(newPatient), options);
    };
    SearchViewPatListService.prototype.updatePatient = function (patientId, updatePatient) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(updatePatient);
        return this.http.put("http://localhost/HCAPI/api/patient/" + patientId, body, options);
    };
    SearchViewPatListService.prototype.deletePatient = function (patientId) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete("http://localhost/HCAPI/api/patient/" + patientId, options);
    };
    SearchViewPatListService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json() || 'Server error');
    };
    SearchViewPatListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], SearchViewPatListService);
    return SearchViewPatListService;
    var _a;
}());
exports.SearchViewPatListService = SearchViewPatListService;
//# sourceMappingURL=searchViewPatList.service.js.map