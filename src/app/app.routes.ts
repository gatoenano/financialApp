// Core modules
import { RouterModule, Routes } from '@angular/router';
// App modules
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES:Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'hero/:id', component: HeroComponent },
  // { path: 'search/:term', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
