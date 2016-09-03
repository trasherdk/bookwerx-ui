let config = require('config')
let express = require('express')
let request = require('request')

let router = express.Router()
module.exports = router

let bookwerxCoreURL = config.get('bookwerx_coreURL')

// Display the list of all accounts
router.get('/', (req, res) => {
  request(bookwerxCoreURL + '/accounts?sort={"title":1}', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.render('accounts/accounts.jade', {
        accounts: JSON.parse(body)
      })
    }
  })
})

// Display an add new account form
router.get('/addform', (req, res) => {
  new Promise((resolve, reject) => {
    request(bookwerxCoreURL + '/categories', (error, response, body) => {
      if (error) {
        // r['get_accounts'] = error.message
        // r['example_account_id'] = 'error'
      } else {
        // r['get_accounts'] = body
        // r['example_account_id'] = JSON.parse(body)[0]._id
      }
      resolve(body)
    })
  })
  .then((result) => {
    res.render('accounts/addform.jade', {categories: JSON.parse(result)})
  })
  // res.render('accounts/addform.jade', {categories:[{"v":"Assets"}, {"v":"Liabilities"}]})
})

// Receive the post from the addform
router.post('/addform', (req, res) => {
  request({
    'url': bookwerxCoreURL + '/accounts',
    'method': 'POST',
    'json': {symbol: req.body.symbol, title: req.body.title}
  }, (error, response, body) => {
    if (error) res.send(error)
    res.redirect(req.baseUrl)
  })
})

router.get('/dashboard/:id', (req, res) => {
  let accountId = req.params.id
  request(bookwerxCoreURL + '/accounts/dashboard/' + accountId, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let data = JSON.parse(body)
      res.render('accounts/dashboard.jade', {data})
    } else {
      res.send(error)
    }
  })
})

router.get('/editform/:id', (req, res) => {
  new Promise((resolve, reject) => {
    request(bookwerxCoreURL + '/categories', (error, response, body) => {
      if (error) {
        reject(error)
      } else {
        resolve(body)
      }
    })
  })

  .then((result) => {
    let data = {}
    data['categories'] = JSON.parse(result)

    let accountId = req.params.id
    request(bookwerxCoreURL + '/accounts/' + accountId, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        data['account'] = JSON.parse(body)

        // Now examine each element in categories and determine if it should be selected
        for (let categoriesIdx in data.categories) {
          let category = data.categories[categoriesIdx]

          for (let sbIdx in data.account.categories) {
            let sbCategory = data.account.categories[sbIdx]
            if (sbCategory._id === category._id) {
              category.selected = true
            }
          }
        }

        res.render('accounts/editform.jade', {data})
      } else {
        res.send(error)
      }
    })
  })
})

// Should be put, but browsers can't figure this out
router.post('/editform/:account_id', (req, res) => {
  let accountId = req.params.account_id

  let categories = []
  if (req.body.category_id) {
    if (Array.isArray(req.body.category_id)) {
      categories = req.body.category_id
    } else {
      categories = [req.body.category_id]
    }
  } else {
    // categories sb [].
  }

  let n = {title: req.body.title, categories: categories}
  request({
    'url': bookwerxCoreURL + '/accounts/' + accountId,
    'method': 'PUT',
    'json': n
  }, (error, response, body) => {
    if (error) res.send(error)
    res.redirect(req.baseUrl)
  })
})

// router.get('/accounts/delete/:id', function (req, res) {
    // let accountId = req.params.id
    // accounts = accounts.filter(r=> r.id !== accountId)
    // res.redirect(req.baseUrl + "/accounts")
// })
