import { Component } from '@angular/core'

import { ROUTER_DIRECTIVES } from '@angular/router'
//export { ExtraOptions } from './src/common_router_providers';
//export { Data, ResolveData, Route, RouterConfig } from './src/config';
//export { RouterLink, RouterLinkWithHref } from './src/directives/router_link';
//export { RouterLinkActive } from './src/directives/router_link_active';
//export { RouterOutlet } from './src/directives/router_outlet';
//export { CanActivate, CanDeactivate, Resolve } from './src/interfaces';
//export { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RoutesRecognized } from './src/router';
//export { RouterOutletMap } from './src/router_outlet_map';
//export { provideRouter } from './src/router_providers';
//export { ActivatedRoute, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from './src/router_state';
//export { PRIMARY_OUTLET, Params } from './src/shared';
//export { DefaultUrlSerializer, UrlPathWithParams, UrlSerializer, UrlTree } from './src/url_tree';

import { HTTP_PROVIDERS } from '@angular/http'

import {
  Config,
  NameListService,
  NavbarComponent
  //ToolbarComponent,
  //SearchService
} from './shared/index'
//import { SearchComponent } from './+search/index'
//import { EditComponent } from './+edit/index'

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [
    NameListService,
    //SearchService,
    HTTP_PROVIDERS
    ],
  templateUrl: 'app.component.html',
  directives: [
    ROUTER_DIRECTIVES,
    NavbarComponent
    //ToolbarComponent
  ]
})


export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
