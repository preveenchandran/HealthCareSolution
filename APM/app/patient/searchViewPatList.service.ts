import { Injectable } from '@angular/core';
import { IPatient } from './patient.model';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchViewPatListService {
    constructor(private http: Http) {

    }
    getAllPatient(): Observable<Response> {
        return this.http.get("http://localhost:9000/api/patient");
            
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}