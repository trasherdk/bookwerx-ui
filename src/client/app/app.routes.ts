import { provideRouter, RouterConfig } from '@angular/router'

import { AboutRoutes } from './+about/index'
import { HomeRoutes } from './+home/index'
//import { SearchRoutes } from './+search/index'
//import { EditRoutes } from './+edit/index'


//const routes: RouterConfig = [
  //...HomeRoutes,
  //...AboutRoutes,
  //...SearchRoutes,
  //...EditRoutes
//];

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  //...SearchRoutes,
  //...EditRoutes
]

//export const APP_ROUTER_PROVIDERS = [
  //provideRouter(routes),
//];

export const appRouterProviders = [
  provideRouter(routes),
]
