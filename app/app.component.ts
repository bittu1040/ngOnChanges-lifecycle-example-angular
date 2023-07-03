import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
currentUser: any;

  constructor() {
    this.currentUser = {
      name: 'John Doe',
      email: 'johndoe@example.com'
    };
  }

  public ngOnInit() {

  }

  changeUSer() {
    this.currentUser = {
      name: 'John Doe11111',
      email: 'johndoe@example.com'
    }
  }

}
