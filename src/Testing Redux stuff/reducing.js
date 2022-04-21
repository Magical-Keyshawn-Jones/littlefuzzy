import { combineReducers } from "redux"
import axios from 'axios';
// Creating a  reducer which is basically a Safe/Bank full of Inventory
 function information (){
    return {
      
      user: {    
        name: 'Carol'
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

const pokemonList = 
axios.get('https://pokeapi.co/api/v2/pokemon/')
.then(object=> object.data.results)
.catch(err=>console.log('error!', err))

function pokemonInfo (state = pokemonList) {
    return {
        pokemon: state
    }
}

export default combineReducers({information, pokemonInfo})