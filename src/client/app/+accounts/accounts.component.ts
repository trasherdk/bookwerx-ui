import { Component } from '@angular/core'
import { HeroFormComponent }   from './hero-form.component'
import { AccountFormComponent }   from './account-form.component'

/**
 * This class represents the lazy loaded AccountsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-accounts',
  templateUrl: 'accounts.component.html',
  styleUrls: ['accounts.component.css'],
  directives: [AccountFormComponent, HeroFormComponent]
})
export class AccountsComponent {
  //model = new Account(1,'new title')
  //submitted = false
  //onSubmit() {this.submitted=true}
  //get diagnostic() {return JSON.stringify(this.model)}
}
