// Routing
import { Routes, RouterModule } from '@angular/router';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';

const appRoutes = [
    { path: 'add', component: MovieFormComponent },
    { path: ':category', component: MovieComponentComponent },
    { path: '', redirectTo: 'all', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(appRoutes);