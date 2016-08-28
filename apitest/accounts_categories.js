/*
Conceptually, we can create a new account or update an existing one to point to any existing categories.
We can do the same for categories to make them point to accounts.  However, from a UI pov, we're primarily
interested in looking at an account, and managing the collection of categories that are connected to it.
So the API only focuses on that.

1. POST cat1 and cat2.

2. POST acct1 connected to cat bad. Observe error.

3. POST acct1 connected to cat1.

4. PUT acct1 connected to cat1 and cat2.

5. PUT acct1 connected to cat bad. Observe error.

6. PUT acct1 connected to no cat.

*/

let request = require('request')

exports.catfood = function(r) {
  return new Promise((resolve, reject) => {
    // This sets content-type=application/json
    r['accounts_categories']['post_categories_url1'] = r.bookwerx_coreURL + '/categories'
    r['accounts_categories']['post_categories_data1'] = {symbol:'A', title: 'Assets'}
    // 1.1 POST /categories
    request({
      'url': r['accounts_categories']['post_categories_url1'],
      'method': 'POST',
      'json': r['accounts_categories']['post_categories_data1']
    }, (error, response, body) => {
      if (error) {
        r['accounts_categories']['post_categories_result1'] = error.message
        r['accounts_categories']['categories_id1'] = 'error'
      } else {
        r['accounts_categories']['post_categories_result1'] = JSON.stringify(body)
        r['accounts_categories']['categories_id1'] = body._id
      }
      console.log('resolve AcCa1')

      resolve(r)
    })
  })

  .then((r) => {
    return new Promise((resolve, reject)=> {
      // This sets content-type=application/json
      r['accounts_categories']['post_categories_url2'] = r.bookwerx_coreURL + '/categories'
      r['accounts_categories']['post_categories_data2'] = {symbol:'L', title: 'Liabilities'}
      // 1.2 POST /categories
      request({
        'url': r['accounts_categories']['post_categories_url2'],
        'method': 'POST',
        'json': r['accounts_categories']['post_categories_data2']
      }, (error, response, body) => {
        if (error) {
          r['accounts_categories']['post_categories_result2'] = error.message
          r['accounts_categories']['categories_id2'] = 'error'
        } else {
          r['accounts_categories']['post_categories_result2'] = JSON.stringify(body)
          r['accounts_categories']['categories_id2'] = body._id
        }
        console.log('resolve AcCa2')

        resolve(r)
      })
    })
  })

  .then((r) => {
    return new Promise((resolve, reject) => {
      // This sets content-type=application/json
      r['accounts_categories']['post_accounts_url1'] = r.bookwerx_coreURL + '/accounts'
      r['accounts_categories']['bad_account_id'] = '666666666666666666666666'
      let n = r['accounts_categories']['bad_account_id']
      r['accounts_categories']['post_accounts_data1'] = {title: 'first account', categories:[n]}
      // 2. POST /accounts  ... connected to cat bad. Observe error.
      request({
        'url': r['accounts_categories']['post_accounts_url1'],
        'method': 'POST',
        'json': r['accounts_categories']['post_accounts_data1']
      }, (error, response, body) => {
        if (error) {
          r['accounts_categories']['post_accounts_result1'] = error.message
        } else {
          r['accounts_categories']['post_accounts_result1'] = JSON.stringify(body)
        }
        console.log('resolve AcCa3')

        resolve(r)
      })
    })
  })

  .then((r) => {
    return new Promise((resolve, reject)=> {
      // This sets content-type=application/json
      r['accounts_categories']['post_accounts_url2'] = r.bookwerx_coreURL + '/accounts'
      let n = r['accounts_categories']['categories_id1']
      r['accounts_categories']['post_accounts_data2'] = {title: 'first account', categories:[n]}
      // 2. POST /accounts  ... connected to cat1.
      request({
        'url': r['accounts_categories']['post_accounts_url2'],
        'method': 'POST',
        'json': r['accounts_categories']['post_accounts_data2']
      }, (error, response, body) => {
        if (error) {
          r['accounts_categories']['post_accounts_result2'] = error.message
        } else {
          r['accounts_categories']['post_accounts_result2'] = JSON.stringify(body)
        }
        console.log('resolve AcCa4')

        resolve(r)
      })
    })
  })
}
