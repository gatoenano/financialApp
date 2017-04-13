// Core modules
import { RouterModule, Routes } from '@angular/router';
// App modules
import { HomeComponent } from './components/home/home.component';
import { AssetsListComponent } from './components/assets-list/assets-list.component';

const APP_ROUTES:Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'assets-list', component: AssetsListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
