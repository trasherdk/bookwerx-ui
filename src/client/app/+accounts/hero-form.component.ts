import { Component } from '@angular/core'
//import { NgForm }    from '@angular/forms'

import { Hero }   from './hero'

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
  powers = ['Really Smart','Super Flexible','Super Hot','Weather Changer']
  model = new Hero(18,'Dr. Evil',this.powers[0],'Chuck Overstreet')
  submitted = false
  onSubmit() {this.submitted=true}
  get diagnostic() {return JSON.stringify(this.model)}
}
