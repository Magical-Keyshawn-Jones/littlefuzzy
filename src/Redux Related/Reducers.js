import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// This Grabs pokemon
export const  fetchPokemon = createAsyncThunk('pokemon/grabbingPokemon', async () => {

     const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res=>{
        return res.data.results
    })
    .catch(err=> console.log('error!', err) )
    return response
})

// Storing Pokemon Data
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: 'Something Kewl',
    
    extraReducers: builder => {
        builder
        .addCase(fetchPokemon.pending, (state, action) => {
            return state = true
        })
        .addCase(fetchPokemon.fulfilled, (state, action) => {
           return  state =  action.payload
        }) 
    }
})

// Helper reducer for pokemonSlice to prevent refresh Error
const loadingSlice = createSlice({
    name: 'loadingSlice',
    initialState: true,
    reducers: {
        setLoading (state, action) {
            return state = action.payload
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchPokemon.pending, (state, action) => {
            return state = true
        })
        .addCase(fetchPokemon.fulfilled, (state, action)=> {
            return state = false
        })
    }
})

export const { setPokemon } = pokemonSlice.actions
export const { setLoading } = loadingSlice.actions
export {
    pokemonSlice,
    loadingSlice,
}