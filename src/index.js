import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectNetworkLayer, DefaultNetworkLayer} from 'react-relay'

import {App} from './app/app'

injectNetworkLayer(new DefaultNetworkLayer('http://localhost:5000/graphql'))

render(<App/>, document.getElementById('app'))
