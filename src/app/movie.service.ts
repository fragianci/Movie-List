import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    highMovies: any[] = [{
        title: "Dune",
        actor: 'Tim Chalamet',
        score: 9.5,
        category: 'Sci-fi',
        year: 2021
      },
      {
        title: "Eternals",
        actor: 'Shish-man',
        score: 9.8,
        category: 'Superhero',
        year: 2021
      },
      {
        title: 'Spider-man: no way home',
        actor: 'Tom Holland',
        score: 'Too emotional to score',
        category: 'Superhero',
        year: 2021
      }
    ];

    get(){
        return this.highMovies;
    }

    addMovie(singleMovie){
        this.highMovies.push(singleMovie);
    }

    delete(singleMovie){
        const index = this.highMovies.indexOf(singleMovie);
        if(index >= 0){
            this.highMovies.splice(index, 1)
        }
    }
}