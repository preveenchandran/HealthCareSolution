import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { ProductListComponent } from './products/product-list.component';
import { PatientInfoComponent } from './patientInfo/patient-info.component';
import { HeaderComponent } from './shared/header/header.component';
import { WelcomeComponent } from './home/welcome.component';
import { OnlinePatientEntryComponent } from './onlinePatientEntry/onlinePatientEntry.component';
import { SearchViewPatListComponent } from './patient/searchViewPatList.comp';
import { AddEditPatientComponent } from './patient/addEditPatient.component';

@NgModule({
    imports: [BrowserModule,
        HttpModule,
        FormsModule,
        Routing,
        ReactiveFormsModule
    ],
  declarations: [
    AppComponent,
      ProductListComponent,
      PatientInfoComponent,
      HeaderComponent,
      WelcomeComponent,
      OnlinePatientEntryComponent,
      SearchViewPatListComponent,
      AddEditPatientComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
