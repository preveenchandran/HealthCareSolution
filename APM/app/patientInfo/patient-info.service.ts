import { Injectable } from '@angular/core';
import { IPatientInfo } from './patient-info';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientInfoService {
    constructor(private http: Http) { }

    getPatientInfo(): Observable<IPatientInfo[]> { 
        return this.http.get("http://localhost/HCAPI/api/patient")
            .map((response: Response) => <IPatientInfo[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}