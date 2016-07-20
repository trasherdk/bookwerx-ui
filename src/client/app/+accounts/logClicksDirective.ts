import {Directive, HostListener, /*Component,*/ Output, EventEmitter} from '@angular/core'

@Directive({
  selector: '[logClicksDirective]'
})
export class LogClicksDirective {
  counter = 0
  @Output() changes = new EventEmitter()

  @HostListener('click', ['$event.target'])
  clicked(target) {
    console.log(`Click on [${target}]: ${++this.counter}`)
    //we use emit as next is marked as deprecated
    this.changes.emit(this.counter)
  }
}
