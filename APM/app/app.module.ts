import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { PatientInfoComponent } from './patientInfo/patient-info.component';
import { HeaderComponent } from './shared/header/header.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
    imports: [BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ]),
    ],
  declarations: [
    AppComponent,
      ProductListComponent,
      PatientInfoComponent,
      HeaderComponent,
      WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
