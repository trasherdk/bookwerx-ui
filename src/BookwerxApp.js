import React   from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Link}  from 'react-router-dom'
import {Route} from 'react-router-dom'
import 'bulma/css/bulma.css'

import Accounts from './Accounts'
import Home     from './Home'

const Categories = () => (<div><h2>Categories</h2></div>)
const Currencies = () => (<div><h2>Currencies</h2></div>)
const Transactions = () => (<div><h2>Transactions</h2></div>)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BookwerxApp = () => (
  <Router>
    <div>
      <nav className="navbar ">
        <div className="navbar-brand">
          bookwerx-ui
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/">Home</Link>
            </div>
            <div className="navbar-item">
              <Link to="/accounts">Accounts</Link>
            </div>
            <div className="navbar-item">
              <Link to="/categories">Categories</Link>
            </div>
            <div className="navbar-item">
              <Link to="/currencies">Currencies</Link>
            </div>
            <div className="navbar-item">
              <Link to="/transactions">Transactions</Link>
            </div>
            <div className="navbar-item">
              API
            </div>
            <div className="navbar-item">
              <Link to="/topics">Topics</Link>
            </div>
          </div>
        </div>
      </nav>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/accounts" component={Accounts}/>
      <Route path="/categories" component={Categories}/>
      <Route path="/currencies" component={Currencies}/>
      <Route path="/transactions" component={Transactions}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BookwerxApp
