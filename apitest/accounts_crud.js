let request = require('request')

exports.catfood = function (r) {
  return new Promise((resolve, reject) => {
    // This sets content-type=application/json
    r['accounts']['post_url'] = r.bookwerx_coreURL + '/accounts'
    r['accounts']['post_data'] = {title: 'first title'}
    // 1. POST /accounts
    request({
      'url': r['accounts']['post_url'],
      'method': 'POST',
      'json': r['accounts']['post_data']
    }, (error, response, body) => {
      if (error) {
        r['accounts']['post_result'] = error.message
      } else {
        r['accounts']['post_result'] = JSON.stringify(body)
      }
      console.log('resolve Ac1')

      resolve(r)
    })
  })

  .then((r) => {
    return new Promise((resolve, reject) => {
      r['accounts']['get_url'] = r.bookwerx_coreURL + '/accounts'
      // 2. GET /accounts
      request(r['accounts']['get_url'], (error, response, body) => {
        if (error) {
          r['accounts']['get_result'] = error.message
          r['accounts']['example_id'] = 'error'
        } else {
          r['accounts']['get_result'] = body
          r['accounts']['example_id'] = JSON.parse(body)[0]._id
        }
        console.log('resolve Ac2')

        resolve(r)
      })
    })
  })

  .then((r) => {
    return new Promise((resolve, reject) => {
      // 3.1 GET /accounts/:id  - good id
      r['accounts']['getOne_good_id_url'] = r.bookwerx_coreURL + '/accounts/' + r.accounts.example_id
      request(r['accounts']['getOne_good_id_url'], (error, response, body) => {
        if (error) {
          r['accounts']['getOne_good_id_result'] = error.message
        } else {
          r['accounts']['getOne_good_id_result'] = body
        }
        console.log('resolve Ac3')
        resolve(r)
      })
    })
  })

  .then((r) => {
    return new Promise((resolve, reject) => {
      r['accounts']['bad_id'] = '666666666666666666666666'
      r['accounts']['getOne_bad_id_url'] = r.bookwerx_coreURL + '/accounts/' + r.accounts.bad_id
      // 3.2 GET /accounts/:id  - bad id
      request(r['accounts']['getOne_bad_id_url'], (error, response, body) => {
        if (error) {
          r['accounts']['getOne_bad_id_result'] = error.message
        } else {
          // This should never happen
          r['accounts']['getOne_bad_id_result'] = body
        }
        console.log('resolve Ac4')

        resolve(r)
      })
    })
  })

  .then((r) => {
    return new Promise((resolve, reject) => {
      r['accounts']['put_data'] = {title: 'first amended title'}
      r['accounts']['put_good_id_url'] = r.bookwerx_coreURL + '/accounts/' + r.accounts.example_id
      // 4.1 PUT /accounts/:id  - good id
      request({
        'url': r['accounts']['put_good_id_url'],
        'method': 'PUT',
        'json': r['accounts']['put_data']
      }, (error, response, body) => {
        if (error) {
          r['accounts']['put_good_id_result'] = error.message
        } else {
          r['accounts']['put_good_id_result'] = JSON.stringify(body)
        }
        console.log('resolve Ac5')
        resolve(r)
      })
    })
  })

  .then((r) => {
    return new Promise((resolve, reject) => {
      r['accounts']['put_bad_id_url'] = r.bookwerx_coreURL + '/accounts/' + r.accounts.bad_id
      // 4.1 PUT /accounts/:id  - bad id
      request({
        'url': r['accounts']['put_bad_id_url'],
        'method': 'PUT',
        'json': r['accounts']['put_data']
      }, (error, response, body) => {
        if (error) {
          r['accounts']['put_bad_id_result'] = error.message
        } else {
          r['accounts']['put_bad_id_result'] = JSON.stringify(body)
        }
        console.log('resolve Ac6')
        resolve(r)
      })
    })
  })

  .then((r) => {
    return new Promise((resolve, reject) => {
      r['accounts']['delete_good_id_url'] = r.bookwerx_coreURL + '/accounts/' + r.accounts.example_id
      // 5.1 DELETE /accounts/:id  - good id
      request({
        'url': r['accounts']['delete_good_id_url'],
        'method': 'DELETE'
      }, (error, response, body) => {
        if (error) {
          r['accounts']['delete_good_id_result'] = error.message
        } else {
          r['accounts']['delete_good_id_result'] = body
        }
        console.log('resolve Ac7')
        resolve(r)
      })
    })
  })

  .then((r) => {
    return new Promise((resolve, reject) => {
      r['accounts']['delete_bad_id_url'] = r.bookwerx_coreURL + '/accounts/' + r.accounts.bad_id
      // 5.1 DELETE /accounts/:id  - bad id
      request({
        'url': r['accounts']['delete_bad_id_url'],
        'method': 'DELETE'
      }, (error, response, body) => {
        if (error) {
          r['accounts']['delete_bad_id_result'] = error.message
        } else {
          r['accounts']['delete_bad_id_result'] = body
        }
        console.log('resolve Ac8')

        resolve(r)
      })
    })
  })
}
