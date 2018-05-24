import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import './scss/main.scss';
import './components/oldJS';

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import { HashRouter } from 'react-router-dom'

import reducers from './components/reducers'

import Layout from './components/layout';
import Home from './components/home';
import ProductItems from './components/product-items';
import ProductItem from './components/product-item';
import Basket from './components/basket';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Home}/>
                <Route path='category/:id' component={ProductItems}/>
                <Route path='clothes/:id' component={ProductItem}/>
                <Route path='basket' component={Basket}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
