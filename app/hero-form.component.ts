import { Component } from '@angular/core'
import { NgForm}     from '@angular/common'

import { Herof }      from './herof'

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']
  model = new Herof(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet')
  //submitted=false
  //onSubmit() {this.submitted = true}
  get diagnostic() { return JSON.stringify(this.model)}
}