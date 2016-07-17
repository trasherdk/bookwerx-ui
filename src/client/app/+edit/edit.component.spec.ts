//import { TestComponentBuilder } from '@angular/compiler/testing';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { Component } from '@angular/core';
//import {
  //describe,
  //expect,
  //inject
  //it
//} from '@angular/core/testing';
//import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { EditComponent } from './edit.component';

export function main() {

  describe('Edit Component- new')
  describe('Edit component- old', () => {

    //beforeEach(function(){
      //this.editComponent=new EditComponent(null,null,null)
    //})
    //it('should have person property',function(){
      //expect(this.editComponent.editName).toBe('catfood')
    //})

    // Disable old forms
    let providerArr: any[];

    beforeEach(() => { providerArr = [disableDeprecatedForms(), provideForms()]; });

    //it('should work',inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      //tcb.overrideProviders(TestComponent, providerArr)
        //.createAsync(TestComponent)
        //.then((rootTC: any) => {
          //let editDOMEl = rootTC.debugElement.children[0].nativeElement;
    	  //expect(getDOM().querySelectorAll(editDOMEl, 'h2')[0].textContent).toEqual('Features');
          //expect(true)
        //});
      //})
    //);
  });
}

@Component({
  selector: 'test-cmp',
  directives: [EditComponent],
  template: '<sd-edit></sd-edit>'
})
class TestComponent {}
