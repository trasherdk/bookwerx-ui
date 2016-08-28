let request = require('request')

exports.get = (r) => {
  return new Promise((resolve, reject)=> {

    // 2.2 GET /accounts
    request(r.bookwerx_coreURL + '/accounts', (error, response, body) => {
      if (error) {
        r['get_accounts'] = error.message
        r['example_account_id'] = 'error'
      } else {
        r['get_accounts'] = body
        r['example_account_id'] = JSON.parse(body)[0]._id
      }
      console.log("resolve B2")

      resolve(r)
    })

  })
}

exports.getOne = (r) => {
  // temporary hack. remove this.
  r['example_account_id'] = '666666666666666666666666'

  return new Promise((resolve,reject)=>{

    request(r.bookwerx_coreURL + '/accounts/' + r.example_account_id, (error, response, body) => {
      if (error) {
        r['get_accounts_good_id'] = error.message
      } else {
        r['get_accounts_good_id'] = body
      }
      console.log("resolve B3")

      resolve(r)
    })

  })
}

exports.post = (r) => {
  return new Promise((resolve,reject)=>{

    // This sets content-type=application/json
    request({
      'url': r.bookwerx_coreURL + '/accounts',
      'method': 'POST',
      'json': {title: 'first title'}
    }, (error, response, body) => {
      if (error) {
        r['post_accounts'] = error.message
      } else {
        r['post_accounts'] = JSON.stringify(body)
      }
      console.log("resolve B1")

      resolve(r)
    })
  })
}

exports.catfood = function(r) {
  return new Promise((resolve,reject)=>{

    // This sets content-type=application/json
    request({
      'url': r.bookwerx_coreURL + '/accounts',
      'method': 'POST',
      'json': {title: 'first title'}
    }, (error, response, body) => {
      if (error) {
        r['post_accounts'] = error.message
      } else {
        r['post_accounts'] = JSON.stringify(body)
      }
      console.log("resolve B1")

      resolve(r)
    })


    //console.log("resolve 2.1")
    //r['2.1']='set'
    //resolve(r)
  }).then((r)=> {
    return new Promise((resolve, reject)=> {

      // 2.2 GET /accounts
          request(r.bookwerx_coreURL + '/accounts', (error, response, body) => {
            if (error) {
              r['get_accounts'] = error.message
              r['example_account_id'] = 'error'
            } else {
              r['get_accounts'] = body
              r['example_account_id'] = JSON.parse(body)[0]._id
            }
            console.log("resolve B2")

            resolve(r)
          })


      //console.log("resolve 2.2")
      //result['2.2']='set'
      //resolve(result)
    })
  })
  .then((r)=> {
  return new Promise((resolve, reject)=> {

    request(r.bookwerx_coreURL + '/accounts/' + r.example_account_id, (error, response, body) => {
      if (error) {
        r['get_accounts_good_id'] = error.message
      } else {
        r['get_accounts_good_id'] = body
      }
      console.log("resolve B3")

      resolve(r)
    })

    //console.log("resolve 2.3")
  //result['2.3']='set'
  //resolve(result)
  })
  })
      .then((r) => {
        r['bad_account_id'] = '666666666666666666666666'
        return new Promise((resolve, reject) => {
          request(r.bookwerx_coreURL + '/accounts/' + r.bad_account_id, (error, response, body) => {
            if (error) {
              r['get_accounts_bad_id'] = error.message
            } else {
              // This should never happen
              r['get_accounts_bad_id'] = body
            }
            console.log("resolve B4")

            resolve(r)
          })
        })
      })

      .then((r)=> {
    return new Promise((resolve, reject)=> {

      request({
        'url': r.bookwerx_coreURL + '/accounts/' + r.example_account_id,
        'method': 'PUT',
        'json': {title: 'first amended title'}
      }, (error, response, body) => {
        if (error) {
          r['put_accounts_good_id'] = error.message
        } else {
          r['put_accounts_good_id'] = JSON.stringify(body)
        }
        console.log("resolve B5")

        resolve(r)
      })

      //console.log("resolve 2.5")
      //result['2.5']='set'
      //resolve(result)
    })
  })
      .then((r)=> {
        return new Promise((resolve, reject)=> {

          request({
            'url': r.bookwerx_coreURL + '/accounts/' + r.bad_account_id,
            'method': 'PUT',
            'json': {title: 'first amended title'}
          }, (error, response, body) => {
            if (error) {
              r['put_accounts_bad_id'] = error.message
            } else {
              r['put_accounts_bad_id'] = JSON.stringify(body)
            }
            console.log("resolve B6")

            resolve(r)
          })


          //console.log("resolve 2.6")
          //result['2.6']='set'
          //resolve(result)
        })
      })
      .then((r)=> {
        return new Promise((resolve, reject)=> {

          request({
            'url': r.bookwerx_coreURL + '/accounts/' + r.example_account_id,
            'method': 'DELETE'
          }, (error, response, body) => {
            if (error) {
              r['delete_accounts_good_id'] = error.message
            } else {
              r['delete_accounts_good_id'] = body
            }
            console.log("resolve B7")

            resolve(r)
          })


          //console.log("resolve 2.7")
          //result['2.7']='set'
          //resolve(result)
        })
      })
      .then((r)=> {
        return new Promise((resolve, reject)=> {

          request({
            'url': r.bookwerx_coreURL + '/accounts/' + r.example_account_id, // yes, example, not bad
            'method': 'DELETE'
          }, (error, response, body) => {
            if (error) {
              r['delete_accounts_bad_id'] = error.message
            } else {
              r['delete_accounts_bad_id'] = body
            }
            console.log("resolve B8")

            resolve(r)
          })

          //console.log("resolve 2.8")
          //result['2.8']='set'
          //resolve(result)
        })
      })
}