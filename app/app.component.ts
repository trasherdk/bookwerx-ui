import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { HeroService }        from './hero.service';
import { HeroFormComponent } from './hero-form.component';
import { AccountsService }        from './accounts.service';

@Component({
  selector: 'my-app',

  //template: '<hero-form></hero-form>',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
      <a [routerLink]="['/accounts']" routerLinkActive="active">Accounts</a>
      <a [routerLink]="['/form']" routerLinkActive="active">Form</a>
    </nav>
    <router-outlet></router-outlet>

  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES,HeroFormComponent],
  providers: [
    HeroService,
    AccountsService
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
