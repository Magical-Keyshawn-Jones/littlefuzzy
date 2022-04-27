import { combineReducers } from "redux";
import { GetPokemon } from './Action-Types'

const pokemon = 'Something Great!!!'
function FetchPokemon (state = pokemon, action) {
    switch(action.type){
        case GetPokemon:
            return state = action.payload
        default: 
            return state
    }
}

export default combineReducers({FetchPokemon})