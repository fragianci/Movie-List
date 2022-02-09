import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryListPipe } from './category-list.pipe';
import { FavoriteDirective } from './favorite.directive';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieService } from './movie.service';
import { Routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponentComponent,
    FavoriteDirective,
    CategoryListPipe,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [MovieService, {provide: HttpXhrBackend}],
  bootstrap: [AppComponent]
})
export class AppModule { }
