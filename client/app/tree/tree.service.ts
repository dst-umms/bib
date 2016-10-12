import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TreeService {

  constructor(private http: Http) { }

  getTreeRoot(): Promise<any> {
    return this.http.get('/flask/treeRoot').toPromise()
        .then(response => response.json().nodes)
        .catch(this.handleError);
  }

  handleError(e: any): Promise<any> {
    console.log("Error");
    return Promise.reject(e.message || e);
  }

}
