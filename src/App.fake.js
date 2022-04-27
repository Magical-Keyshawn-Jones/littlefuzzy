import App from "./App"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { configureStore } from '@reduxjs/toolkit';
import PokemonReducer from './Redux Related/Reducers'

export const storage = configureStore({
    reducer: {
      pokemon: PokemonReducer,
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