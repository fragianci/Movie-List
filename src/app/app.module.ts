import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryListPipe } from './category-list.pipe';
import { FavoriteDirective } from './favorite.directive';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponentComponent,
    FavoriteDirective,
    CategoryListPipe,
    MovieFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
