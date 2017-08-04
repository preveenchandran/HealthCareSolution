import { Component, OnInit } from '@angular/core';
import { IOnlinePatient } from './onlinePatient';
@Component({
    templateUrl: "app/onlinePatientEntry/onlinePatientEntry.component.html",
    selector: "onlinePatient-entry"
})
export class OnlinePatientEntryComponent {
    onlinePatient: IOnlinePatient;

    saveOnlinePatient(onlinePatFormValue: any): void{
        console.log(onlinePatFormValue);
        this.onlinePatient.LastName = onlinePatFormValue.lastName;
        this.onlinePatient.FirstName = onlinePatFormValue.firstName;
    }
}