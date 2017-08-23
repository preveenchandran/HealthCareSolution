import { Component, OnInit } from '@angular/core';
import { PatientInfoService } from './patient-info.service';
import { IPatientInfo } from './patient-info';
@Component({
    templateUrl: "app/patientInfo/patient-info.component.html",
    selector: "patient-info"
})
export class PatientInfoComponent implements OnInit{
    patientInfo: IPatientInfo[];
    pageTitle: string;
    errorMessage: string;
    
    constructor(private patientInfoService: PatientInfoService) { }
    ngOnInit(): void {
        this.getPatientInfo();
    }  
    getPatientInfo(): void {
        this.patientInfo = [{
            LastName: "Asdasd",
            FirstName: "asd"
        }];
        this.pageTitle = "Hello";
        this.patientInfoService.getPatientInfo().subscribe(patInfo => this.patientInfo = patInfo,
            error => this.errorMessage = <any>error);
        console.log(this.patientInfo[0].LastName);
    }
    
    clicked() {
        console.log(this.patientInfo[0].LastName = "Changed");
    }
}
