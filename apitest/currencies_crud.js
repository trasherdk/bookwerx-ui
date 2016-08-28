let request = require('request')

exports.catfood = function (r) {
  return new Promise((resolve, reject) => {
    // This sets content-type=application/json
    r['currencies']['post_url'] = r.bookwerx_coreURL + '/currencies'
    r['currencies']['post_data'] = {symbol: 'sym', title: 'first title'}
    // 1. POST /currencies
    request({
      'url': r['currencies']['post_url'],
      'method': 'POST',
      'json': r['currencies']['post_data']
    }, (error, response, body) => {
      if (error) {
        r['currencies']['post_result'] = error.message
      } else {
        r['currencies']['post_result'] = JSON.stringify(body)
      }
      console.log('resolve Cu1')

      resolve(r)
    })
  })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['currencies']['get_url'] = r.bookwerx_coreURL + '/currencies'
          // 2. GET /currencies
          request(r['currencies']['get_url'], (error, response, body) => {
            if (error) {
              r['currencies']['get_result'] = error.message
              r['currencies']['example_id'] = 'error'
            } else {
              r['currencies']['get_result'] = body
              r['currencies']['example_id'] = JSON.parse(body)[0]._id
            }
            console.log('resolve Cu2')

            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          // 3.1 GET /currencies/:id  - good id
          r['currencies']['getOne_good_id_url'] = r.bookwerx_coreURL + '/currencies/' + r.currencies.example_id
          request(r['currencies']['getOne_good_id_url'], (error, response, body) => {
            if (error) {
              r['currencies']['getOne_good_id_result'] = error.message
            } else {
              r['currencies']['getOne_good_id_result'] = body
            }
            console.log('resolve Cu3')
            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['currencies']['bad_id'] = '666666666666666666666666'
          r['currencies']['getOne_bad_id_url'] = r.bookwerx_coreURL + '/currencies/' + r.currencies.bad_id
          // 3.2 GET /currencies/:id  - bad id
          request(r['currencies']['getOne_bad_id_url'], (error, response, body) => {
            if (error) {
              r['currencies']['getOne_bad_id_result'] = error.message
            } else {
              // This should never happen
              r['currencies']['getOne_bad_id_result'] = body
            }
            console.log('resolve Cu4')

            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['currencies']['put_data'] = {symbol: 'nsym', title: 'first amended title'}
          r['currencies']['put_good_id_url'] = r.bookwerx_coreURL + '/currencies/' + r.currencies.example_id
          // 4.1 PUT /currencies/:id  - good id
          request({
            'url': r['currencies']['put_good_id_url'],
            'method': 'PUT',
            'json': r['currencies']['put_data']
          }, (error, response, body) => {
            if (error) {
              r['currencies']['put_good_id_result'] = error.message
            } else {
              r['currencies']['put_good_id_result'] = JSON.stringify(body)
            }
            console.log('resolve Cu5')
            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['currencies']['put_bad_id_url'] = r.bookwerx_coreURL + '/currencies/' + r.currencies.bad_id
          // 4.1 PUT /currencies/:id  - bad id
          request({
            'url': r['currencies']['put_bad_id_url'],
            'method': 'PUT',
            'json': r['currencies']['put_data']
          }, (error, response, body) => {
            if (error) {
              r['currencies']['put_bad_id_result'] = error.message
            } else {
              r['currencies']['put_bad_id_result'] = JSON.stringify(body)
            }
            console.log('resolve Cu6')
            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['currencies']['delete_good_id_url'] = r.bookwerx_coreURL + '/currencies/' + r.currencies.example_id
          // 5.1 DELETE /currencies/:id  - good id
          request({
            'url': r['currencies']['delete_good_id_url'],
            'method': 'DELETE'
          }, (error, response, body) => {
            if (error) {
              r['currencies']['delete_good_id_result'] = error.message
            } else {
              r['currencies']['delete_good_id_result'] = body
            }
            console.log('resolve Cu7')
            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['currencies']['delete_bad_id_url'] = r.bookwerx_coreURL + '/currencies/' + r.currencies.bad_id
          // 5.1 DELETE /currencies/:id  - bad id
          request({
            'url': r['currencies']['delete_bad_id_url'],
            'method': 'DELETE'
          }, (error, response, body) => {
            if (error) {
              r['currencies']['delete_bad_id_result'] = error.message
            } else {
              r['currencies']['delete_bad_id_result'] = body
            }
            console.log('resolve Cu8')

            resolve(r)
          })
        })
      })
}
