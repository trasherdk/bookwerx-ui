let config = require('config')
let request = require('request')
let express = require('express')

let router = express.Router()
module.exports = router

let bookwerxCoreURL = config.get('bookwerx_coreURL')

// Display an add new distribution form. We must specify a transaction_id
// to attach the new distribution to.
router.get('/addform/:transaction_id', (req, res) => {
  let data = {}
  // Read the accounts to build the select
  new Promise((resolve, reject) => {
    request(bookwerxCoreURL + '/accounts', (error, response, body) => {
      if (error) {
        // r['get_accounts'] = error.message
        // r['example_account_id'] = 'error'
      } else {
        // r['get_accounts'] = body
        // r['example_account_id'] = JSON.parse(body)[0]._id
      }
      data['accounts'] = JSON.parse(body)
      resolve(true)
    })
  })
  .then((result) => {
    // Read the currencies to build the select
    return new Promise((resolve, reject) => {
      request(bookwerxCoreURL + '/currencies', (error, response, body) => {
        if (error) {
          // r['get_accounts'] = error.message
          // r['example_account_id'] = 'error'
        } else {
          // r['get_accounts'] = body
          // r['example_account_id'] = JSON.parse(body)[0]._id
        }
        data['currencies'] = JSON.parse(body)
        resolve(true)
      })
    })
  })
  .then((result) => {
    data['transactionId'] = req.params.transaction_id
    res.render('distributions/addform.jade', {data})
  })
})

// Receive the post from the addform
router.post('/addform/:transaction_id', (req, res) => {
  let j = {}
  j['currency_id'] = req.body.currency_id
  j['amount'] = parseFloat(req.body.amount) * parseInt(req.body.drcr)
  j['account_id'] = req.body.account_id
  j['transaction_id'] = req.params.transaction_id

  request({
    'url': bookwerxCoreURL + '/distributions',
    'method': 'POST',
    'json': j
  }, (error, response, body) => {
    if (error) res.send(error)
    res.redirect('/transactions/dashboard/' + req.params.transaction_id)
  })
})

// Display an edit/delete distribution form. We must specify a distribution_id.
router.get('/editform/:distribution_id', (req, res) => {
  let data = {}
  let distributionId = req.params.distribution_id

  // Read the accounts to build the select
  new Promise((resolve, reject) => {
    request(bookwerxCoreURL + '/accounts', (error, response, body) => {
      if (error) {
        // r['get_accounts'] = error.message
        // r['example_account_id'] = 'error'
      } else {
        // r['get_accounts'] = body
        // r['example_account_id'] = JSON.parse(body)[0]._id
      }
      data['accounts'] = JSON.parse(body)
      resolve(true)
    })
  })
  .then((result) => {
    // Read the currencies to build the select
    return new Promise((resolve, reject) => {
      request(bookwerxCoreURL + '/currencies', (error, response, body) => {
        if (error) {
          // r['get_accounts'] = error.message
          // r['example_account_id'] = 'error'
        } else {
          // r['get_accounts'] = body
          // r['example_account_id'] = JSON.parse(body)[0]._id
        }
        data['currencies'] = JSON.parse(body)
        resolve(true)
      })
    })
  })
  .then((result) => {
    request(bookwerxCoreURL + '/distributions/' + distributionId, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        data['distribution'] = JSON.parse(body)
        res.render('distributions/editform.jade', {data})
      } else {
        res.send(error)
      }
    })
  })
})

// Should be put, but browsers can't figure this out
router.post('/editform/:distributionId', (req, res) => {
  let distributionId = req.params.distributionId

  if (typeof req.body.delete !== 'undefined') {
    request({
      'url': bookwerxCoreURL + '/distributions/' + distributionId,
      'method': 'DELETE'
    }, (error, response, body) => {
      // Delete returns the document that was just deleted.
      if (error) res.send(error)
      let j = JSON.parse(body)
      let url = '/transactions/dashboard/' + j.transaction_id
      res.redirect(url)
    })
  } else {
    // If not delete, assume save

    let j = {}
    j['currency_id'] = req.body.currency_id
    j['amount'] = parseFloat(req.body.amount) * parseInt(req.body.drcr)
    j['account_id'] = req.body.account_id
    j['transaction_id'] = req.body.transaction_id

    request({
      'url': bookwerxCoreURL + '/distributions/' + distributionId,
      'method': 'PUT',
      'json': j
    }, (error, response, body) => {
      if (error) res.send(error)
      res.redirect('/transactions/dashboard/' + body.transaction_id)
    })
  }
})