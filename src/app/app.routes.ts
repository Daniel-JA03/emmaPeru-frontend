import { Routes } from '@angular/router';
import { ClienteLayout } from './cliente/layout/cliente-layout/cliente-layout';
import { Home } from './cliente/pages/home/home';
import { AboutUs } from './cliente/pages/about/about-us/about-us';
import { WhoIs } from './cliente/pages/about/who-is/who-is';
import { Contact } from './cliente/pages/about/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: ClienteLayout,
    children: [
      { path: '', component: Home },
      // Auth

      // Rutas para CLIENTE


      {
        path: 'about',
        children: [
          { path: 'sobre-nosotros', component: AboutUs },
          { path: 'quien-es', component: WhoIs },
          { path: 'contacto', component: Contact }
        ]
      }
      
    ],
  },
];
