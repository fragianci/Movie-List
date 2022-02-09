import { Component } from '@angular/core';
import { MovieService } from './movie.service';

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
 
  constructor(private movieService: MovieService){
    this.highMovies = movieService.get();
  }

  onUpdateMovie(event){
    console.log(event);
  }

  hide(){
    this.isHiding = !this.isHiding;
  }
  
}


