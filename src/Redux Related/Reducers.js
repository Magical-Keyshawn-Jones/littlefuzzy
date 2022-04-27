import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// This Grabs the pokemon
export const grabbingPokemons = createAsyncThunk('pokemon/grabbingPokemon', async (filler, { dispatch }) => {
    return await axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res=>{
        // console.log(res.data.results)
        dispatch(testingReducer(res.data.results))
    })
    .catch(err=>{return console.log('error!', err)})
})

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: 'Something Kewl',
    reducers: {
        fetchPokemon (state, action) {
            axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res=>{
                console.log(res.data)
                return state = res.data.results
            })
            .catch(err=>{console.log('error!', err)})
            return console.log(state)
        },
        testingReducer (state, action) {
            return state = action.payload
        },
    }
})

export const { fetchPokemon, testingReducer} = pokemonSlice.actions
export default pokemonSlice.reducer 