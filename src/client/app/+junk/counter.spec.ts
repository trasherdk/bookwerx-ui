//import {describe, it, expect, inject, beforeEach, beforeEachProviders} from 'angular2/testing';
//import {CounterComponent} from './counter'
//import {Injector} from 'angular2/core';
//import { beforeEachProviders, inject } from '@angular/core/testing'

/* 
  Usage: <counter (changes)="log($event)"></counter> 
         log($event) { console.log($event) }
*/

export function main() {
  /*describe('EventEmitter: Counter', () => {
    let counter
  
    //setup
    beforeEachProviders(() => [
      Counter
    ])
  
    beforeEach(inject([Counter], c => {
      counter = c
    }))
  
    //specs
    it('should increment +1', done => {
      counter.changes.subscribe(x => { 
        expect(x).toBe(1)
        done()
      })
      counter.change(1);
    })

    it('should decrement -1', done => {
      counter.changes.subscribe(x => { 
        expect(x).toBe(-1)
        done()
      })
      counter.change(-1)
    })
  })*/
}
