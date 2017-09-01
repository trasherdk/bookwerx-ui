import React from 'react'

const Accounts = () => (
  <div>
    <h2>Accounts</h2>
    <button className="button is-primary">New Account</button>

    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Categories</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td></td>
          <td>BTC</td>
          <td>Asset, Crypto</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>RMB</td>
          <td>Asset, Bank</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Accounts
