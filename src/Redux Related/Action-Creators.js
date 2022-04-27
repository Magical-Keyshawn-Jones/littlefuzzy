import axios from "axios";
import { GetPokemon } from "./Action-Types";

export function pokemonData (data) {
    return {type: GetPokemon, payload: data}
}

export function GrabPokemon () {
   return function (dispatch) {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res =>{
        dispatch(pokemonData(res.data.results))
    })
    .catch(err => console.log('error!!!', err))
   }
}