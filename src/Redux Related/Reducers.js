import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// export const grabbingPokemons = createAsyncThunk('pokemon/grabbingPokemon', async (say, dispatch) => {
//     return await axios.get('https://pokeapi.co/api/v2/pokemon/')
//     .then(res=>{
//         dispatch(testingReducer('idk kid'))
//     })
//     .catch(err=>{return console.log('error!', err)})
// })

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
        // extraReducers: {
        //     [grabbingPokemons.pending]: (state, action) => {
        //         return state  = 'loading something'
        //     },

        //     [grabbingPokemons.fulfilled]: (state, action) => {
        //         return state = action.payload
        //     }
        // }
    }
})

export const { fetchPokemon, testingReducer} = pokemonSlice.actions
export default pokemonSlice.reducer 

export const grabbingPokemons = createAsyncThunk('pokemon/grabbingPokemon', async (say, { dispatch }) => {
    return await axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res=>{
        console.log(res.data.results)
        dispatch(testingReducer('idk kid'))
    })
    .catch(err=>{return console.log('error!', err)})
})

// const pokemon = 'Something Great!!!'
// function something (state = pokemon, action) {
//     switch(action.type){
//         case GetPokemon:
//             return state = action.payload
//         default: 
//             return state
//     }
// }
