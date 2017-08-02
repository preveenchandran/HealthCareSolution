import { Component } from '@angular/core';
import { PatientInfoService } from './patientInfo/patient-info.service';

@Component({
    selector: 'pm-app',
    template: `
        <header></header>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    `,
    providers: [PatientInfoService]
})
export class AppComponent {
    pageTitle: string = `Health Care Solutions`;
}
