import { Location }    from '@angular/common'
import { SpyLocation } from '@angular/common/testing'

import {
  Component,
  ComponentResolver,
  Injector
} from '@angular/core'

import {
  disableDeprecatedForms,
  provideForms
} from '@angular/forms'

import { TestComponentBuilder } from '@angular/core/testing'
import {
  addProviders,
  async,
  inject
} from '@angular/core/testing'

//import { addProviders } from '@angular/core/testing'

import {
  UrlSerializer,
  DefaultUrlSerializer,
  RouterOutletMap,
  Router,
  ActivatedRoute,
  RouterConfig
} from '@angular/router'

import { AboutComponent } from './+about/about.component'
import { HomeComponent }  from './+home/home.component'
import { AppComponent }   from './app.component'

export function main() {

  describe('App component', () => {
    // Disable old forms
    let providerArr: any[] // what is this for?

    let config:RouterConfig = [
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent}
    ]

    beforeEach(() => addProviders([
      disableDeprecatedForms(),
      provideForms(),
      RouterOutletMap,
      {provide: UrlSerializer, useClass: DefaultUrlSerializer},
      {provide: Location, useClass: SpyLocation},
      {
        provide: Router,
        useFactory: (
            resolver:ComponentResolver,
            urlSerializer:UrlSerializer,
            outletMap:RouterOutletMap,
            location:Location,
            injector:Injector) => {
          const r = new Router(TestComponent, resolver, urlSerializer, outletMap, location, injector, config)
          //r.initialNavigation()
          return r
        },
        deps: [ComponentResolver, UrlSerializer, RouterOutletMap, Location, Injector]
      },
      {provide: ActivatedRoute, useFactory: (r:Router) => r.routerState.root, deps: [Router]}
    ]))

    // Support for testing component that uses Router
    it('should build without a problem',
      async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        tcb.overrideProviders(TestComponent, providerArr)
          .createAsync(TestComponent)
          .then((fixture) => {
            // Should also test for _only_ these three items.
            expect((fixture.nativeElement.innerText.indexOf('HOME'))>=0).toBeTruthy()
            expect((fixture.nativeElement.innerText.indexOf('ACCOUNTS'))>=0).toBeTruthy()
            expect((fixture.nativeElement.innerText.indexOf('ABOUT'))>=0).toBeTruthy()
          })
      }))
    )
  })
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>',
  directives: [AppComponent]
})
class TestComponent {
}
