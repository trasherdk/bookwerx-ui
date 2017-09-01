import React from 'react'

const Home = () => (
  <div>
    <div className="field">
      <label className="label">bookwerx-core ip:port</label>
      <div className="control">
        <input className="input" type="text" placeholder="127.0.0.1:3003" />
      </div>
    </div>

    <div className="field">
      <label className="label">API Key</label>
      <div className="control">
        <input className="input" type="text" />
      </div>
    </div>

    <div className="field">
      <label className="label">API Secret</label>
      <div className="control">
        <input className="input" type="text" />
      </div>
    </div>


    <div className="control">
      <button className="button is-primary">Get Key</button>
    </div>

  </div>
)

export default Home
