import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/Operator/toPromise';

import { TreeComponent } from './tree/tree.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.http.get('/server')
        .toPromise()
        .then(response => this.title = response.json().title);
  }
}
