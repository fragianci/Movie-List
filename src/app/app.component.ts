import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MovieService } from './movie.service';

interface Pokemon {
  name: string,
  abilities: string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My awesome Movie List';
  highMovies: any[];
  whoops = "Nothing to watch here";
  isHiding = false;
  pokemon: Pokemon[] = [];
 
  constructor(
    private movieService: MovieService,
    private http: HttpClient){
    this.highMovies = movieService.get();
  }

  onUpdateMovie(event){
    console.log(event);
  }

  getData(){
    this.http.get("https://pokeapi.co/api/v2/pokemon/ditto/", {responseType: 'json'}).toPromise().then(
      (data: any) => {
        this.pokemon.push({
          name: data.forms[0].name,
          abilities: [
            data.abilities[0].ability.name,
            data.abilities[1].ability.name
          ]
        });
        console.log(data)
      }
    )
  }

  hide(){
    this.isHiding = !this.isHiding;
  }
  
}


