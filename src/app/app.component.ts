import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

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
  providers: [HeroService],
})

export class AppComponent implements OnInit {
  title = 'Angular 2 Heros';
  heroes: Hero[];  
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  };
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}