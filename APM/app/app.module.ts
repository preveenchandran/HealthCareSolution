import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { PatientInfoComponent } from './patientInfo/patient-info.component';
import {HeaderComponent } from './shared/header/header.component';

@NgModule({
    imports: [BrowserModule,
        HttpModule,
        FormsModule
    ],
  declarations: [
    AppComponent,
      ProductListComponent,
      PatientInfoComponent,
      HeaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
