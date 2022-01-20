import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.scss']
})
export class MovieComponentComponent implements OnInit {
  @Input() movie;
  @Output() customClick = new EventEmitter();
  isMovieShown = true;
  isClicked = false

  onClick(){
    console.log('So much clicked!');
    this.customClick.emit(this.movie);
  }

  onHighlight(){
    this.isClicked = !this.isClicked;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
