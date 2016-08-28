let bodyParser = require('body-parser')
let config = require('config')
let request = require('request')

let accountsAPITest = require('./apitest/accounts_crud')
let accounts_categoriesAPITest = require('./apitest/accounts_categories')
let categoriesAPITest = require('./apitest/categories_crud')
let currenciesAPITest = require('./apitest/currencies_crud')

let express = require('express')
let app = express()

app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'))
app.use(bodyParser.urlencoded({extended: true}))

/*function doStuff(num, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      console.log("now " + num)
      resolve()
    }, timeout)
  })
}*/

/*doStuff(1, 1000).then( () => {
  return doStuff(2, 1000)
}).then( () => {
  return doStuff(3, 1000)
})*/


function exerciseAPI() {

  let bookwerx_coreURL = config.get('bookwerx_coreURL_APITest')
  let r = {'bookwerx_coreURL': bookwerx_coreURL}

  return new Promise((resolve, reject) => {

    //- 1. Brainwipe
    request.put(bookwerx_coreURL + '/brainwipe', (error, response, body) => {
      if (error) {
        r['brainwipe'] = error.message
      } else {
        r['brainwipe'] = JSON.parse(body)
      }
      console.log("1. resolve brainwipe")
      resolve(r)
    })

    //console.log("resolve 1.1")
    //r['1.1']='set'
    //resolve(r)
  }).then((result)=>{
    result['accounts']={}
    return accountsAPITest.catfood(r)
  }).then((result)=>{
    result['categories']={}
    return categoriesAPITest.catfood(r)
  }).then((result)=>{
    result['currencies']={}
    return currenciesAPITest.catfood(r)
  }).then((result)=>{
    result['accounts_categories']={}
    return accounts_categoriesAPITest.catfood(r)
  })
  .catch((error)=>{
    console.log(error)
  })

}

app.get('/', function (req, res) {
  res.render('index.jade', {ordinary_api: config.get('bookwerx_coreURL'), apitest_api: config.get('bookwerx_coreURL_APITest')})
})

app.get('/api', function (req, res) {

  exerciseAPI().then((result)=>{
    console.log("time to render.")
    res.render('api.jade', {title: 'API', result:result})
  })


})

var accountsRouter = require('./routes/accounts')
app.use('/accounts', accountsRouter)

var categoriesRouter = require('./routes/categories')
app.use('/categories', categoriesRouter)

var currenciesRouter = require('./routes/currencies')
app.use('/currencies', currenciesRouter)

var distributionsRouter = require('./routes/distributions')
app.use('/distributions', distributionsRouter)

var transactionsRouter = require('./routes/transactions')
app.use('/transactions', transactionsRouter)

let port = config.get('port')
var listener = app.listen(port, () => {
  console.log('Using configuration: %s', config.get('configName'))
  console.log('Bookwerx-ui listening at %s', listener.address().port)
})