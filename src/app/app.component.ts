import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My awesome Movie List';
 

  onUpdateMovie(event){
    console.log(event);
  }
  
}


