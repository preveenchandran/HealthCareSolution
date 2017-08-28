import { IPatient } from './patient.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SearchViewPatListService } from './searchViewPatList.service';

@Component({
    templateUrl: "app/patient/addEditPatient.html",
    selector: "patient-addedit"
})
export class AddEditPatientComponent implements OnInit{
    patients: IPatient[];
    addPatientForm: FormGroup;
    lstName: string;
    constructor(private formBuilder: FormBuilder, private searchViewPatListService: SearchViewPatListService) { }
    ngOnInit(): void {
        this.addPatientForm = this.formBuilder.group({
            firstName: '',
            lastName:''
        });
        this.getAllPatient();
    } 
    getAllPatient(): void {
        this.patients = [{
            LastName: "Asdasd",
            FirstName: "asd"
        }];
        this.searchViewPatListService.getAllPatient().subscribe(patList => this.patients = patList);
    }
    addNewPatient(newPat: any): void {
        this.searchViewPatListService.addNewPatient(newPat).subscribe(x => {
            this.getAllPatient();
        });
    }
    
}