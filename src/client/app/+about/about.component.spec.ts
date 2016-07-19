import { TestComponentBuilder } from '@angular/compiler/testing'
import { disableDeprecatedForms, provideForms } from '@angular/forms'
import { Component } from '@angular/core'
import {
  //describe,
  //expect,
  inject
  //it
} from '@angular/core/testing'
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter'

//import * as util from 'gulp-util'

import { AboutComponent } from './about.component'

export function main() {
  describe('About component', () => {
    // Disable old forms
    let providerArr: any[];

    beforeEach(() => { providerArr = [disableDeprecatedForms(), provideForms()]; });

    it('should workk',
      inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.overrideProviders(TestComponent, providerArr)
          .createAsync(TestComponent)
          .then((rootTC: any) => {

            let aboutDOMEl = rootTC.debugElement.children[0].nativeElement
            let n = getDOM().querySelectorAll(aboutDOMEl, 'h2')[0].textContent
            console.log('about.component.spec.ts',n)

            expect(getDOM().querySelectorAll(aboutDOMEl, 'h2')[0].textContent).toEqual('Features')
          })
      })
    )
  })
}

@Component({
  selector: 'test-cmp',
  directives: [AboutComponent],
  template: '<sd-about></sd-about>'
})
class TestComponent {}
