let request = require('request')
let express = require('express')

let router = express.Router()
module.exports = router

// Display the list of all categories
router.get('/', (req, res) => {
  request('http://localhost:3003/categories', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.render('categories/categories.jade', {
        categories: JSON.parse(body)
      })
    }
  })
})

// Display an add new category form
router.get('/addform', (req, res) => {
  res.render('categories/addform.jade')
})

// Receive the post from the addform
router.post('/addform', (req, res) => {
  request({
    'url': 'http://localhost:3003/categories',
    'method': 'POST',
    'json': {symbol: req.body.symbol, title: req.body.title}
  }, (error, response, body) => {
    if (error) res.send(error)
    res.redirect(req.baseUrl)
  })
})

router.get('/editform/:id', (req, res) => {
  let categoryId = req.params.id
  request('http://localhost:3003/categories/' + categoryId, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let category = JSON.parse(body)
      res.render('categories/editform.jade', {category})
    } else {
      res.send(error)
    }
  })
})

// Should be put, but browsers can't figure this out
router.post('/editform/:id', (req, res) => {
  let categoryId = req.params.id
  let n =   {symbol: req.body.symbol, title: req.body.title}
  request({
    'url': 'http://localhost:3003/categories/' + categoryId,
    'method': 'PUT',
    'json': n
  }, (error, response, body) => {
    if (error) res.send(error)
    res.redirect(req.baseUrl)
  })
})

//router.get('/categories/delete/:id', function (req, res) {
    //let categoryId = req.params.id
    //categories = categories.filter(r=> r.id !== categoryId)
    //res.redirect(req.baseUrl + "/categories")
//})
