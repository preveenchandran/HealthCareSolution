import { Component, OnInit } from '@angular/core';
import { OnlinePatient } from './onlinePatient';
@Component({
    templateUrl: "app/onlinePatientEntry/onlinePatientEntry.component.html",
    selector: "onlinePatient-entry"
})
export class OnlinePatientEntryComponent {
    onlinePatient = new OnlinePatient();

    saveOnlinePatient(onlinePatFormValue: any): void{
        console.log(onlinePatFormValue);
    }
}