import { Component } from '@angular/core';
// import { HeroComponent } from './hero/hero.component';


export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hero ';
  hero: Hero = {
    id: 20,
    name: 'abhijith'
    
  };
}
