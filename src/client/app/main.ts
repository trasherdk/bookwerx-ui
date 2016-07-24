import { APP_BASE_HREF }  from '@angular/common'

import { enableProdMode } from '@angular/core'

import {
  disableDeprecatedForms,
  provideForms
} from '@angular/forms'

import { bootstrap } from '@angular/platform-browser-dynamic'

//import { APP_ROUTER_PROVIDERS } from './app.routes'
import { AppComponent }       from './app.component'
import { appRouterProviders } from './app.routes'

if ('<%= ENV %>' === 'prod') { enableProdMode() }

/**
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */
bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  //APP_ROUTER_PROVIDERS,
  {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },

  appRouterProviders

])

// In order to start the Service Worker located at "./worker.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
//
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./worker.js').then((registration: any) =>
//       console.log('ServiceWorker registration successful with scope: ', registration.scope))
//     .catch((err: any) =>
//       console.log('ServiceWorker registration failed: ', err));
// }
