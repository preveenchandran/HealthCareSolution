import { IPatient } from './patient.model';
import { Component, OnInit } from '@angular/core';
import { SearchViewPatListService } from './searchViewPatList.service'
@Component({
    templateUrl: "app/patient/searchViewPatList.comp.html",
    selector:"search-view"
})
export class SearchViewPatListComponent implements OnInit {
    patients: IPatient[];
    filteredPatients: IPatient[];
    fullListPatients: IPatient[];
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
        this.searchViewPatListService.getAllPatient().subscribe(patList => {
            this.patients = patList;
            this.fullListPatients = this.patients;
        });
        
        //console.log(this.errorMsg);
    }

    searchPatient(value: string, source: any): void {
        this.filteredPatients = this.patients;
        switch (source.target.id.toLowerCase()) {
            case "firstname":
                this.filteredPatients = this.filteredPatients.filter(x => x.FirstName.toLowerCase().includes(value.toLowerCase()));
                break;
            case "lastname":
                this.filteredPatients = this.filteredPatients.filter(x => x.LastName.toLowerCase().includes(value.toLowerCase()));
                break;
            default:
        }
        this.patients = this.filteredPatients;
        
    }
}