import { IPatient } from './patient.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SearchViewPatListService } from './searchViewPatList.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    templateUrl: "app/patient/addEditPatient.html",
    selector: "patient-addedit",
    styles: ['.hideClass { display: none; } .accordionHide{display: none;transition: visibility 0.5s, opacity 0.5s linear;}'],
    animations: [
        trigger('popOverState', [
            state('show', style({
                opacity: 1,
                height:'auto'
            })),
            state('hide', style({
                opacity: 0,
               height:'0px'
            })),
            transition('show => hide', animate('600ms ease-out')),
            transition('hide => show', animate('1000ms ease-in'))
        ])
    ]
})
export class AddEditPatientComponent implements OnInit {
    selectedPatient: IPatient;
    selectedPatientId: number;
    isUpdateStyle: boolean = false;
    accordionHide: boolean = false;
    addPatientForm: FormGroup;
    lstName: string;
    show: boolean = true;
    firstName = new FormControl('', [Validators.required, , Validators.minLength(2)])
    lastName = new FormControl('')
    constructor(private formBuilder: FormBuilder,
        private searchViewPatListService: SearchViewPatListService,
        private activatedRoute: ActivatedRoute,
        private router: Router) {
        this.addPatientForm = this.formBuilder.group({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }
    ngOnInit(): void {
       
        this.activatedRoute.params.subscribe((params: Params) => {
            this.selectedPatientId = params['id'];
            if (this.selectedPatientId) {
                this.getPatient(this.selectedPatientId);
                this.isUpdateStyle = true;
            }
            
        });


    }

    getPatient(selectedPatientId: number): void {
        this.searchViewPatListService.getPatient(selectedPatientId).subscribe(selectedPatient => {
            this.selectedPatient = selectedPatient;
            this.setFormValue();
        });
    }
    setFormValue(): void {
        this.addPatientForm.setValue({
            firstName: this.selectedPatient.FirstName,
            lastName: this.selectedPatient.LastName
        });
    }
    addNewPatient(newPat: any): void {
        this.searchViewPatListService.addNewPatient(newPat).subscribe(x => {
            this.router.navigate(['/SearchViewPatList']);
        });

    }

    updatePatient(updatePat: any): void {
        this.searchViewPatListService.updatePatient(this.selectedPatientId, updatePat).subscribe(x => {
            this.router.navigate(['/SearchViewPatList']);
        });
    }
    accordionCollapse(): void {
        this.accordionHide = !this.accordionHide;
    }

    get stateName() {
        return this.show ? 'show' : 'hide'
    }
    toggle() {
        this.show = !this.show;
    }

}