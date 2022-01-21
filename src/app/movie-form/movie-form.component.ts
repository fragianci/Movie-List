import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  // @Output() movieEmitter = new EventEmitter();

  // Model driven form
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  // Validator and custom validator
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });
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
    console.log(movieItem);
  }

}
