import { IPatient } from './patient.model';
import { Component, OnInit } from '@angular/core';
import { SearchViewPatListService } from './searchViewPatList.service'
@Component({
    templateUrl: "app/patient/searchViewPatList.comp.html",
    selector:"search-view"
})
export class SearchViewPatListComponent implements OnInit {
    patients: IPatient[];
    errorMsg: any;
    constructor(private searchViewPatListService: SearchViewPatListService) {

    }
    ngOnInit(): void {
        this.getAllPatient();
    }
    
    getAllPatient(): void {
        this.patients = [{
            LastName: "Asdasd",
            FirstName: "asd"
        }];
        this.searchViewPatListService.getAllPatient().map((response) => <IPatient[]>response.json()).subscribe(x => this.patients = x);
        //console.log(this.errorMsg);
    }
}