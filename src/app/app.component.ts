import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My awesome Movie List';
  highMovies: any[] = [{
    title: "Dune",
    actor: 'Tim Chalamet',
    score: 9.5,
    category: 'Sci-fi',
    watchedOn: '10-19-2021'
  },
  {
    title: "Eternals",
    actor: 'Shish-man',
    score: 9.8,
    category: 'Superhero',
    watchedOn: '11-05-2021'
  },
  {
    title: 'Spider-man: no way home',
    actor: 'Tom Holland',
    score: 'Too emotional to score',
    category: 'Superhero',
    watchedOn: '12-15-2021'
  }
];

  onUpdateMovie(event){
    console.log(event);
  }
  
}


