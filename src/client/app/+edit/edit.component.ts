import { Component, OnInit } from '@angular/core';
import { Person, Address, SearchService } from '../shared/index';
//import { RouteSegment, Router } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sd-edit',
  moduleId: module.id,
  templateUrl: 'edit.component.html',
  styleUrls: ['edit.component.css']
})
export class EditComponent implements OnInit {

  person: Person;
  editName: string;
  editPhone: string;
  editAddress: Address;

  constructor(
    private _service: SearchService,
    private _router: Router,
    //private _routeSegment: RouteSegment
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    //let id = +this._routeSegment.getParam('id');

    //this._service.get(id).subscribe(person => {
      //if (person) {
        //this.editName = person.name;
        //this.editPhone = person.phone;
        //this.editAddress = person.address;
        //this.person = person;
      //} else {
        //this.gotoList();
      //}
    //});

    //let sub = this._route.params.subscribe(params=>{
    this._route.params.subscribe(params => {
      let id=+params['id']
      this._service.get(id).subscribe(person => {
        if (person) {
          this.editName = person.name;
          this.editPhone = person.phone;
          this.editAddress = person.address;
          this.person = person;
        } else {
          this.gotoList();
        }
      })
    })

  }

  cancel() {
    this._router.navigate(['/search']);
  }

  save() {
    this.person.name = this.editName;
    this.person.phone = this.editPhone;
    this.person.address = this.editAddress;
    this._service.save(this.person);
    this.gotoList();
  }

  gotoList() {
    if (this.person) {
      this._router.navigate(['/search', {term: this.person.name} ]);
    } else {
      this._router.navigate(['/search']);
    }
  }
}
