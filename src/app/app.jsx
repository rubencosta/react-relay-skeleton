import React, {Component} from 'react'
import Relay, {RootContainer, createContainer} from 'react-relay'
import {RelayRouter} from 'react-router-relay'
import {Route, Link, hashHistory} from 'react-router'

import Index from './itemIndex.jsx'

const indexQueries = {
  viewer: () => Relay.QL`query {viewer}`
}

const Dashboard = ({children}) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/index">index</Link>
      {children}
    </div>
  )
}

export const App = () => {
  return (
    <RelayRouter history={hashHistory}>
      <Route
        path="/"
        component={Dashboard}
      >
        <Route
          path="index"
          component={Index}
          queries={indexQueries}
        />
      </Route>
    </RelayRouter>
  )
}