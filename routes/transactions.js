let config = require('config')
let express = require('express')
let request = require('request')

let router = express.Router()
module.exports = router

let bookwerx_coreURL = config.get('bookwerx_coreURL')

// Display the list of all transactions
router.get('/', (req, res) => {
  request(bookwerx_coreURL + '/transactions', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.render('transactions/transactions.jade', {
        transactions: JSON.parse(body)
      })
    }
  })
})

// Display an add new transaction form
router.get('/addform', (req, res) => {
  res.render('transactions/addform.jade')
})

// Receive the post from the addform
router.post('/addform', (req, res) => {
  request({
    'url': 'http://localhost:3003/transactions',
    'method': 'POST',
    'json': {datetime: req.body.datetime, note: req.body.note}
  }, (error, response, body) => {
    if (error) res.send(error)
    res.redirect(req.baseUrl )
  })
})

router.get('/dashboard/:id', (req, res) => {

  let transactionId = req.params.id
  request('http://localhost:3003/transactions/dashboard/' + transactionId, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let data = JSON.parse(body)
      res.render('transactions/dashboard.jade', {data})
    } else {
      res.send(error)
    }
  })
})

router.get('/editform/:id', (req, res) => {
  let transactionId = req.params.id
  request('http://localhost:3003/transactions/' + transactionId, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let transaction = JSON.parse(body)
      res.render('transactions/editform.jade', {transaction})
    } else {
      res.send(error)
    }
  })
})

// Should be put, but browsers can't figure this out
router.post('/editform/:id', (req, res) => {
  let transactionId = req.params.id
  let n =   {datetime: req.body.datetime, note: req.body.note}
  request({
    'url': 'http://localhost:3003/transactions/' + transactionId,
    'method': 'PUT',
    'json': n
  }, (error, response, body) => {
    if (error) res.send(error)
    res.redirect(req.baseUrl)
  })
})

//router.get('/transactions/delete/:id', function (req, res) {
    //let transactionId = req.params.id
    //transactions = transactions.filter(r=> r.id !== transactionId)
    //res.redirect(req.baseUrl + "/transactions")
//})









































