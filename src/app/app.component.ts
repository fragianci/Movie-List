import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-exercise';
  highMovies: any[] = [{
    title: "Dune",
    actor: 'Tim Chalamet',
    score: 9.5,
    category: 'Sci-fi'
  },
  {
    title: "Eternals",
    actor: 'Shish-man',
    score: 9.8,
    category: 'Superhero'
  },
  {
    title: 'Spider-man: no way home',
    actor: 'Tom Holland',
    score: 'Too emotional to score',
    category: 'Superhero'
  }
];

  onUpdateMovie(event){
    console.log(event);
  }
  
}


