import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PageFirstComponent } from './app/pages/page-first/page-first.component';
import { PageSecondComponent } from './app/pages/page-second/page-second.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full',
  },
  {
    path: 'first',
    component: PageFirstComponent,
  },
  {
    path: 'second',
    loadComponent: () =>
      import('./app/pages/page-second/page-second.component').then(
        (c) => c.PageSecondComponent
      ),
  },
];


// chargement en lazy loading
