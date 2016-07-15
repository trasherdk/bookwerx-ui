import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { AccountsComponent } from './accounts.component';
import { AccountDetailComponent } from './account-detail.component';
import { HeroFormComponent } from './hero-form.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'form',
    component: HeroFormComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];