import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { name: 'Anil', age: 25, email: 'xyz@test.com' },
    { name: 'Sam',  age: 19, email: 'xyz@test.com' },
    { name: 'Tony', age: 34, email: 'xyz@test.com' },
    { name: 'Kelly', age: 45, email: 'xyz@test.com' }
  ];
}
