// see https://github.com/ngrx/router
//import {describe, it, expect, inject, injectAsync, beforeEach, beforeEachProviders} from 'angular2/testing';
import {beforeEachProviders, inject} from '@angular/core/testing'
//import {provide} from 'angular2/core';
//import {provide} from '@angular/core';

//import {Router, Location, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';
//import {Router} from '@angular/router'
//import {Location} from '@angular/common'

//import {RouteRegistry} from 'angular2/src/router/route_registry';
//import {SpyLocation} from 'angular2/src/mock/location_mock';
//import {SpyLocation} from '@angular/common/testing'
//import {RootRouter} from 'angular2/src/router/router';
//import {RootRouter} from '@angular/router-deprecated'

//import {App} from './app';

export function main() {
  describe('Router tests', () => {
    //var location, router

    beforeEachProviders(() => [
      //RouteRegistry,
      //provide(Location, {useClass: SpyLocation}),
      //provide(Router, {useClass: RootRouter}),
      //provide(ROUTER_PRIMARY_COMPONENT, {useValue: App})
    ])

    //beforeEach(inject([Router, Location], (r, l) => {
    beforeEach(inject([], () => {
    //router = r;
    //location = l;
    }));

    it('should eat catfood', done => {
      done()
    })
    /*it('Should be able to navigate to Home', done => {
    router.navigate(['Home']).then(() => {
    expect(location.path()).toBe('/home');
    done();
    }).catch(e => done.fail(e));
    });

    it('Should be able to navigate to People', done => {
    router.navigate(['People']).then(() => {
    expect(location.path()).toBe('/people');
    done();
    }).catch(e => done.fail(e));
    });

    it('Should be able to navigate to About', done => {
    router.navigate(['About']).then(() => {
    expect(location.path()).toBe('/about');
    done();
    }).catch(e => done.fail(e));
    });

    it('should redirect not registered urls to Home', done => {
    router.navigateByUrl('/unknown').then(() => {
    expect(location.path()).toBe('/home');
    done();
    }).catch(e => done.fail(e));
    });*/
  })
}
