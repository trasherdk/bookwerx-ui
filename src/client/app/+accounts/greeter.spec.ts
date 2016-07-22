import { TestComponentBuilder } from '@angular/compiler/testing'
import { beforeEachProviders, inject } from '@angular/core/testing'
import { GreeterComponent } from './greeter'

export function main() {
  describe('Greeter: component', () => {
    let tcb

    // setup
    beforeEachProviders(()=>[
      TestComponentBuilder,
      GreeterComponent
    ])

    beforeEach(inject([TestComponentBuilder], _tcb => {
      tcb = _tcb
    }))

    // specs
    it('shoulder render Hello World', () => {
      //console.log('greeter.component.spec.ts')

      tcb.createAsync(GreeterComponent).then(fixture => {
        let greeter = fixture.componentInstance
        let element = fixture.nativeElement
        greeter.name = 'Worldd'
        fixture.detectChanges()
        //let n = element.querySelector('h1').innerText
        //console.log('greeter.component.spec.ts',n)
        expect(element.querySelector('h1').innerText.toBe('Hello World1dd'))
        //done()
      })
    })
  })
}
