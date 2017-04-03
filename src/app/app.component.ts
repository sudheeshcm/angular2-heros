import { Component } from '@angular/core';

import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

console.log('HEROES: ', HEROES);

@Component({
  selector: 'my-app',
  template: 
  `<div>
    <h1>{{title}}</h1>
    <ul class='heroes'>
      <li *ngFor='let hero of heroes'
        [class.selected]="hero === selectedHero"
        (click)='onSelect(hero)'
      >
        <span class='badge'>{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]='selectedHero'></hero-detail>
  </div>`,
})

export class AppComponent  {
  title = 'Angular 2 Heros';
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

}