import { Injectable } from '@angular/core';
import { IPatient } from './patient.model';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchViewPatListService {
    constructor(private http: Http) {

    }
    getAllPatient(): Observable<IPatient[]> {
        return this.http.get("http://localhost/HCAPI/api/patient")
            .map((response : Response) => <IPatient[]>response.json());
            
    }

    addNewPatient(newPatient : IPatient): Observable<any>{
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("http://localhost/HCAPI/api/patient", JSON.stringify(newPatient), options);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }


}