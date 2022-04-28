import App from "./App"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice, loadingSlice } from './Redux Related/Reducers'

export const storage = configureStore({
    reducer: {
      pokemon: pokemonSlice.reducer,
      loading: loadingSlice.reducer,
    }
  })


export default function Apps (props) {
    return (
        <Provider store={storage}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
}