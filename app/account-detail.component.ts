import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Account }        from './account';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'my-account-detail',
  templateUrl: 'app/account-detail.component.html',
  styleUrls: ['app/account-detail.component.css']
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  @Input() account: Account;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here

  constructor(
      private accountsService: AccountsService,
      private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = params['id'];
        this.navigated = true;
        this.accountsService.getAccount(id)
            .then (account => this.account = account);
      } else {
        this.navigated = false;
        //this.account = new Hero();
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {
    this.accountsService
        .save(this.account)
        .then(account => {
          this.account = account; // saved account, w/ id if new
          this.goBack(account)
        })
        .catch(error => this.error = error)
  }
  goBack(savedHero: Account = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
}