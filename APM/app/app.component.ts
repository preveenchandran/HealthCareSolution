import { Component } from '@angular/core';
import { PatientInfoService } from './patientInfo/patient-info.service';
import { SearchViewPatListService } from './patient/searchViewPatList.service';

@Component({
    selector: 'pm-app',
    template: `
        <header></header>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    `,
    providers: [PatientInfoService,
        SearchViewPatListService
    ]
})
export class AppComponent {
    constructor() {
        $(document).ready(function () { console.log('jquery is working'); });
    }
    pageTitle: string = `Health Care Solutions`;
}
