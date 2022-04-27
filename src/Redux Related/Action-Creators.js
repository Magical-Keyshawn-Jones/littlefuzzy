import axios from "axios";
import { fetchPokemon } from "./Reducers";

export function GrabPokemon () {
   return function (dispatch) {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res =>{
        console.log(res.data)
        // dispatch(fetchPokemon(res.data.results))
        dispatch(fetchPokemon(res.data.results))
    })
    .catch(err => console.log('error!!!', err))
   }
}