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

import { AccountsComponent } from './accounts.component'

export function main() {
  describe('Accounts component', () => {
    // Disable old forms
    let providerArr: any[];

    beforeEach(() => { providerArr = [disableDeprecatedForms(), provideForms()]; });

    it('should workk',
      inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.overrideProviders(TestComponent, providerArr)
          .createAsync(TestComponent)
          .then((rootTC: any) => {

            let accountsDOMEl = rootTC.debugElement.children[0].nativeElement
            let n = getDOM().querySelectorAll(accountsDOMEl, 'h2')[0].textContent
            console.log('accounts.component.spec.ts',n)

            //expect(getDOM().querySelectorAll(accountsDOMEl, 'h2')[0].textContent).toEqual('Features')
          })
      })
    )
  })
}

@Component({
  selector: 'test-cmp',
  directives: [AccountsComponent],
  template: '<sd-accounts></sd-accounts>'
})
class TestComponent {}
