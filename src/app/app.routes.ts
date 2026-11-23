import { Routes } from '@angular/router';
import { ClienteLayout } from './cliente/layout/cliente-layout/cliente-layout';
import { Home } from './cliente/pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: ClienteLayout,
    children: [
      { path: '', component: Home },
    ],
  },
];
