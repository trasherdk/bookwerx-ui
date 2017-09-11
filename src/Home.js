import React   from 'react'
import request from 'request'

import State from './state'

const bookWerxCoreURL = 'localhost:3003'

const readKey = () => {

  return new Promise((resolve, reject) => {
    request({
      'url': 'http://' + bookWerxCoreURL + '/keys',
      'method': 'POST'
    }, (error, res, body) => {
      if (error) {
        reject(error)
      } else {
        State.emit('receiveNewAPIKey', JSON.parse(body))
        resolve(body)
      }
    })
  })
}

class Home extends React.Component {

  componentDidMount() {
    const me = this // why?
    State.on('update', function(){me.forceUpdate()})
  }

  render() {
    return(
      <div>
        <div className='field'>
          <label className='label'>bookwerx-core ip:port</label>
          <div className='control'>
            <input className='input' type='text' placeholder={bookWerxCoreURL} />
          </div>
        </div>

        <div className='field'>
          <label className='label'>API Key</label>
          <div className='control'>
            <input className='input' type="text" value={State.get().apiKey} />
          </div>
        </div>

        <div className='field'>
          <label className='label'>API Secret</label>
          <div className='control'>
            <input className='input' type='text' value={State.get().apiSecret} />
          </div>
        </div>


        <div className='control'>
          <button className='button is-primary' onClick={()=>{readKey()}}>Get Key</button>
        </div>

      </div>
    )
  }

}

export default Home
