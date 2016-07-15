import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Account }                from './account';
import { AccountsService }         from './accounts.service';
import { AccountDetailComponent } from './account-detail.component'

@Component({
  selector: 'my-accounts',
  templateUrl: 'app/accounts.component.html',
  styleUrls:  ['app/accounts.component.css'],
  directives: [AccountDetailComponent]
})
export class AccountsComponent implements OnInit {
  accounts: Account[];
  selectedAccount: Account;
  addingAccount = false
  error: any

  constructor(
      private router: Router,
      private accountsService: AccountsService) { }

  getAccounts() {
    this.accountsService
        .getAccounts()
        .then(accounts => this.accounts = accounts)
        .catch(error => this.error = error)
  }

  addAccount() {
    this.addingAccount = true
    this.selectedAccount = null
  }

  close(savedAccount: Account) {
    this.addingAccount = false
    if (savedAccount) { this.getAccounts(); }
  }

  deleteAccount(account: Account, event: any) {
    event.stopPropagation()
    this.accountsService
        .delete(account)
        .then(res => {
          this.accounts = this.accounts.filter(h => h !== account)
          if (this.selectedAccount === account) { this.selectedAccount = null; }
        })
        .catch(error => this.error = error)
  }

  ngOnInit() {
    this.getAccounts();
  }

  onSelect(account: Account) {
    this.selectedAccount = account
    this.addingAccount = false
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedAccount.id]);
  }
}