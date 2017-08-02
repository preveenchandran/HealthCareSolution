import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PatientInfoComponent } from './patientInfo/patient-info.component';

const routes: Routes = [
    { path: 'Welcome', component: WelcomeComponent },
    { path: 'PatientInfo', component: PatientInfoComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);