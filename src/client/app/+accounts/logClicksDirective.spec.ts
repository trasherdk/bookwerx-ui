//import {describe, it, expect, injectAsync, beforeEach, beforeEachProviders, TestComponentBuilder} from 'angular2/testing'
import {Component, Output, EventEmitter} from '@angular/core'
import {LogClicksDirective} from './logClicksDirective'

/* 
  Usage:     <div log-clicks></div>
  For each click increments the public property `counter`.
*/

@Component({
  selector: 'container-component',
  template: `<div log-clicks (changes)="changed($event)"></div>`,
  directives: [LogClicksDirective]
})
export class ContainerComponent {
  @Output() changes = new EventEmitter()

  changed(value) {
    this.changes.emit(value)
  }
}

export function main() {
/*describe('Directive: logClicks', () => {
  let fixture
  
  //setup
  beforeEachProviders(() => [
    TestComponentBuilder
  ])

  beforeEach(injectAsync([TestComponentBuilder], tcb => {
    return tcb
      .createAsync(Container)
      .then(f => fixture = f)
  }))
  
  //specs
  //it('should increment counter', done => {
    //let container = fixture.componentInstance,
      //div = fixture.nativeElement.querySelector('div')
    //set up subscriber
   // container.changes.subscribe(x => {
      //expect(x).toBe(1);
      //done()
    //});
    //trigger click on container
    //div.click()
  //}
//)
//)
})*/
}
