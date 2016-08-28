let request = require('request')
let express = require('express')

let router = express.Router()
module.exports = router

// Display the list of all currencies
router.get('/', (req, res) => {
  request('http://localhost:3003/currencies', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.render('currencies/currencies.jade', {
        currencies: JSON.parse(body)
      })
    }
  })
})

// Display an add new currency form
router.get('/addform', (req, res) => {
  res.render('currencies/addform.jade')
})

// Receive the post from the addform
router.post('/addform', (req, res) => {
  request({
    'url': 'http://localhost:3003/currencies',
    'method': 'POST',
    'json': {symbol: req.body.symbol, title: req.body.title}
  }, (error, response, body) => {
    if (error) res.send(error)
    res.redirect(req.baseUrl)
  })
})

router.get('/editform/:id', (req, res) => {
  let currencyId = req.params.id
  request('http://localhost:3003/currencies/' + currencyId, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let currency = JSON.parse(body)[0]
      res.render('currencies/editform.jade', {currency})
    } else {
      res.send(error)
    }
  })
})

// Should be put, but browsers can't figure this out
router.post('/editform/:id', (req, res) => {
  let currencyId = req.params.id
  let n =   {symbol: req.body.symbol, title: req.body.title}
  request({
    'url': 'http://localhost:3003/currencies/' + currencyId,
    'method': 'PUT',
    'json': n
  }, (error, response, body) => {
    if (error) res.send(error)
    res.redirect(req.baseUrl)
  })
})

//router.get('/currencies/delete/:id', function (req, res) {
    //let currencyId = req.params.id
    //currencies = currencies.filter(r=> r.id !== currencyId)
    //res.redirect(req.baseUrl + "/currencies")
//})
