import { Component } from '@angular/core';
import { PatientInfoService } from './patientInfo/patient-info.service';

@Component({
    selector: 'pm-app',
    template: `
    <div id="page" >
        <header></header>
        <patient-info></patient-info>
    </div>
    `,
    providers: [PatientInfoService]
})
export class AppComponent {
    pageTitle: string = `Health Care Solutions`;
}
