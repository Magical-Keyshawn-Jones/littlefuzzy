import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';

// Creating a  reducer which is basically a Safe/Bank full of Inventory
function reducer (){
    return {

      user: {    
        name: 'Dustin'
      },
    
      movies: [
        'Star Wars',
        'Lord of the Rings',
        'Harry Potter'
      ],
    
      todoList: [
        { task: 'Learn Redux', id: 0, completed: false }
      ],
    
      moviesToWatch: 13
    }
}

// Storing our Bank/Safe inside of a variable
// reducer is our Bank/Safe
// createStore holds our Bank/Safe stuff
const storage = createStore(reducer)

ReactDOM.render(
  <Router>
    <Provider store={storage} >
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);