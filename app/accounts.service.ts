import { Injectable }    from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { Account } from './account'

@Injectable()
export class AccountsService {

  private accountsUrl = 'app/accounts';  // URL to web api

  constructor(private http: Http) { }

  getAccounts(): Promise<Account[]> {
    
    return this.http.get(this.accountsUrl)
        .toPromise()
        .then(response => response.json().data)
        .catch(this.handleError)
  }


  getAccount(id: string) {
    return this.getAccounts()
        .then(accounts => accounts.filter(account => account.id === id)[0]);
  }

  save(account: Account): Promise<Account> {
    if (account.id) {
      return this.put(account)
    }
    return this.post(account)
  }

  delete(account: Account) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')

    let url = `${this.accountsUrl}/${account.id}`

    return this.http
        .delete(url, headers)
        .toPromise()
        .catch(this.handleError)
  }

  // Add new Accounts
  private post(account: Account): Promise<Account> {
    let headers = new Headers({
      'Content-Type': 'application/json'})

    return this.http
        .post(this.accountsUrl, JSON.stringify(account), {headers: headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError)
  }

  // Update existing Accounts
  private put(account: Account) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')

    let url = `${this.accountsUrl}/${account.id}`
    return this.http
        .put(url, JSON.stringify(account), {headers: headers})
        .toPromise()
        .then(() => account)
        .catch(this.handleError)
  }
    
  private handleError(error: any) {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
