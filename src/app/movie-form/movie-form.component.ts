import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  // @Output() movieEmitter = new EventEmitter();

  // Model driven form
  form: FormGroup;
  name: string;
  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService) { }

  // Validator and custom validator
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      actor: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      score: new FormControl('', this.scoreValidator),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });
  }

  scoreValidator(control: FormControl){
    if(!isNaN(control.value)){
      return null
    } else {
      return { score: true };
    }
  }

  yearValidator(control: FormControl){
    if(control.value.trim().length === 0){
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2100;
    if(year >= minYear && year <= maxYear){
      return null;
    } else {
      return {
        year: {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(movieItem){
    // this.movieEmitter.emit(movieItem);
    this.movieService.addMovie(movieItem);
  }

}
