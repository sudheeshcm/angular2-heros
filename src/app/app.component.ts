import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `<div>
    <h1>{{title}}</h1>
    <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular 2 Heros';
}
