import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './Testing Redux stuff/reducing';
// import logger from 'redux-logger';
// use combine reducers to merge all reducers in one thing

// Storing our Bank/Safe inside of a variable
// reducer is our Bank/Safe
// createStore holds our Bank/Safe stuff
// const storage = createStore(reducer)

// logger will console.log my actions as they flow through the action creators
// before they hit the reducer
// const storage = createStore(reducer, applyMiddleware(logger))

// thunk makes my action creators asynchronous
const storage = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={storage} >
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);