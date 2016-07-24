// Usage: <greeter name="Joe"></greeter>
// Renders: <h1>Hello Joe!</h1>

import { Component, Input } from '@angular/core'

@Component({
    selector: 'greeter-component',
    template: '<h1>Hello {{name}}</h1>'
})
export class GreeterComponent {
    @Input() name
}
