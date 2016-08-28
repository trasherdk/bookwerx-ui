let request = require('request')

exports.catfood = function (r) {
  return new Promise((resolve, reject) => {
    // This sets content-type=application/json
    r['categories']['post_url'] = r.bookwerx_coreURL + '/categories'
    r['categories']['post_data'] = {symbol: 'sym', title: 'first title'}
    // 1. POST /categories
    request({
      'url': r['categories']['post_url'],
      'method': 'POST',
      'json': r['categories']['post_data']
    }, (error, response, body) => {
      if (error) {
        r['categories']['post_result'] = error.message
      } else {
        r['categories']['post_result'] = JSON.stringify(body)
      }
      console.log('resolve Ca1')

      resolve(r)
    })
  })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['categories']['get_url'] = r.bookwerx_coreURL + '/categories'
          // 2. GET /categories
          request(r['categories']['get_url'], (error, response, body) => {
            if (error) {
              r['categories']['get_result'] = error.message
              r['categories']['example_id'] = 'error'
            } else {
              r['categories']['get_result'] = body
              r['categories']['example_id'] = JSON.parse(body)[0]._id
            }
            console.log('resolve Ca2')

            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          // 3.1 GET /categories/:id  - good id
          r['categories']['getOne_good_id_url'] = r.bookwerx_coreURL + '/categories/' + r.categories.example_id
          request(r['categories']['getOne_good_id_url'], (error, response, body) => {
            if (error) {
              r['categories']['getOne_good_id_result'] = error.message
            } else {
              r['categories']['getOne_good_id_result'] = body
            }
            console.log('resolve Ca3')
            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['categories']['bad_id'] = '666666666666666666666666'
          r['categories']['getOne_bad_id_url'] = r.bookwerx_coreURL + '/categories/' + r.categories.bad_id
          // 3.2 GET /categories/:id  - bad id
          request(r['categories']['getOne_bad_id_url'], (error, response, body) => {
            if (error) {
              r['categories']['getOne_bad_id_result'] = error.message
            } else {
              // This should never happen
              r['categories']['getOne_bad_id_result'] = body
            }
            console.log('resolve Ca4')

            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['categories']['put_data'] = {symbol: 'nsym', title: 'first amended title'}
          r['categories']['put_good_id_url'] = r.bookwerx_coreURL + '/categories/' + r.categories.example_id
          // 4.1 PUT /categories/:id  - good id
          request({
            'url': r['categories']['put_good_id_url'],
            'method': 'PUT',
            'json': r['categories']['put_data']
          }, (error, response, body) => {
            if (error) {
              r['categories']['put_good_id_result'] = error.message
            } else {
              r['categories']['put_good_id_result'] = JSON.stringify(body)
            }
            console.log('resolve Ca5')
            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['categories']['put_bad_id_url'] = r.bookwerx_coreURL + '/categories/' + r.categories.bad_id
          // 4.1 PUT /categories/:id  - bad id
          request({
            'url': r['categories']['put_bad_id_url'],
            'method': 'PUT',
            'json': r['categories']['put_data']
          }, (error, response, body) => {
            if (error) {
              r['categories']['put_bad_id_result'] = error.message
            } else {
              r['categories']['put_bad_id_result'] = JSON.stringify(body)
            }
            console.log('resolve Ca6')
            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['categories']['delete_good_id_url'] = r.bookwerx_coreURL + '/categories/' + r.categories.example_id
          // 5.1 DELETE /categories/:id  - good id
          request({
            'url': r['categories']['delete_good_id_url'],
            'method': 'DELETE'
          }, (error, response, body) => {
            if (error) {
              r['categories']['delete_good_id_result'] = error.message
            } else {
              r['categories']['delete_good_id_result'] = body
            }
            console.log('resolve Ca7')
            resolve(r)
          })
        })
      })

      .then((r) => {
        return new Promise((resolve, reject) => {
          r['categories']['delete_bad_id_url'] = r.bookwerx_coreURL + '/categories/' + r.categories.bad_id
          // 5.1 DELETE /categories/:id  - bad id
          request({
            'url': r['categories']['delete_bad_id_url'],
            'method': 'DELETE'
          }, (error, response, body) => {
            if (error) {
              r['categories']['delete_bad_id_result'] = error.message
            } else {
              r['categories']['delete_bad_id_result'] = body
            }
            console.log('resolve Ca8')

            resolve(r)
          })
        })
      })
}
