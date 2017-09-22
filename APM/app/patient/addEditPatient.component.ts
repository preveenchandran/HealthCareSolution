import { IPatient } from './patient.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SearchViewPatListService } from './searchViewPatList.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: "app/patient/addEditPatient.html",
    selector: "patient-addedit",
    styles: ['.hideClass { display: none; }']
})
export class AddEditPatientComponent implements OnInit{
    selectedPatient: IPatient;
    selectedPatientId: number;
    isUpdateStyle: boolean;
    addPatientForm: FormGroup;
    lstName: string;
    constructor(private formBuilder: FormBuilder,
        private searchViewPatListService: SearchViewPatListService,
        private activatedRoute: ActivatedRoute,
        private router: Router) { }
    ngOnInit(): void {
        this.addPatientForm = this.formBuilder.group({
            firstName: '',
            lastName: ''
        });
        this.activatedRoute.params.subscribe((params: Params) => {
            this.selectedPatientId = params['id'];
            if (this.selectedPatientId) {
                this.getPatient(this.selectedPatientId);
                this.isUpdateStyle = true;
            }
        });
    } 
    
    getPatient(selectedPatientId: number): void {
        this.searchViewPatListService.getPatient(selectedPatientId).subscribe(selectedPatient => this.selectedPatient = selectedPatient);
    }
    addNewPatient(newPat: any): void {
        this.searchViewPatListService.addNewPatient(newPat).subscribe(x => {
            this.router.navigate(['/SearchViewPatList']);
        });
        
    }

    updatePatient(updatePat: any): void {
        this.searchViewPatListService.updatePatient(this.selectedPatientId, updatePat).subscribe(x =>{
            this.router.navigate(['/SearchViewPatList']);
        });
    }

   
    
}