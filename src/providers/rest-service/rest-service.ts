import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {
  
  apiUrl = 'http://37.187.125.66:3000/users' ;
  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
  
  getRestApi() {
    console.log('Hello getRestApi() !');
    return this.http.get('http://37.187.125.66:3000/users');
  }

  postRestApi(json){ 
    return this.http.post('http://37.187.125.66:3000/users', json);
  }
  
}
