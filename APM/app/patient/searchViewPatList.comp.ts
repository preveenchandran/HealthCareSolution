import { IPatient } from './patient.model';
import { Component, OnInit } from '@angular/core';
import { SearchViewPatListService } from './searchViewPatList.service';
import { Router } from '@angular/router';
@Component({
    templateUrl: "app/patient/searchViewPatList.comp.html",
    selector:"search-view"
})
export class SearchViewPatListComponent implements OnInit {
    patients: IPatient[];
    filteredPatients: IPatient[];
    fullListPatients: IPatient[];
    errorMsg: any;
    constructor(private searchViewPatListService: SearchViewPatListService,
        private router: Router) {

    }
    ngOnInit(): void {
        this.getAllPatient();
    }
    
    getAllPatient(): void {
        this.searchViewPatListService.getAllPatient().subscribe(patList => {
            this.patients = patList;
            this.fullListPatients = this.patients;
        });
        
        //console.log(this.errorMsg);
    }

    //Todo: On Deleting the original data doesnt come back
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

    deletePatient(patId: number) {
        this.searchViewPatListService.deletePatient(patId).subscribe(x => {
            this.getAllPatient();
        });
        return false;
    }

    navigateToPatientDetail(id: number): void {
        this.router.navigate(['/AddEditPatient', id]);
    }
}