import { HttpResponse } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';
/*
  Generated class for the MessageserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageserviceProvider {


private url : string = 'assets/data/testing.json' ;

  constructor(private http: Http) {
    console.log('Hello MessageserviceProvider Provider');

  }

  getMessages():Observable<any>{
   return this.http.get(this.url)
    .map(response => response.json());
    ;
  }
}
