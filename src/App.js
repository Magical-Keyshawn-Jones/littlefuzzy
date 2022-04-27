import './App.css';
import { useState, useEffect } from 'react';
import Home from './Home Components/Home';
import { NavLink, Routes, Route, BrowserRouter}from 'react-router-dom';
import { GrabPokemon } from './Redux Related/Action-Creators';
import { Provider, connect, useDispatch } from 'react-redux';
import { configureStore, createAction } from '@reduxjs/toolkit';
import PokemonReducer from './Redux Related/Reducers'
import { fetchPokemon, grabbingPokemons, testingReducer, testAgain } from './Redux Related/Reducers';
// import {Pokemon, Cooking, Gaming, Games, Home} from './Export Files/AppRouteExports'

// export const storing = configureStore({
//   reducer: {
//     pokemon: PokemonReducer,
//   }
// })

// import * as actionCreators from './Redux Related/Action-Creators'
// Add moving png jpeg images on my webpage
// Add a form that contributes to making something
// Add a hover mechanic for accessibility (Like showing words)
// Make font smaller 
// Try to add a legacy Class Components instead function components for practice
// Create a random form wording adjective, verb, noun, thing
// Try Using Position and Display css more often 
// End Goal, fill up the entire page (It's like art class the more empty it is the more there is to improve on it)

//  function App (props) {
 function App (props) {
  const { pokemonReducers } = props
  const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(grabbingPokemons())
 },[])

  // Storing Welcome words in a Variable
  const navWords = {
    home: 'Welcome to my Home!',
    gaming: 'Super Awesome Gaming Area!',
    cooking: 'Ruthy-G Cooking Shout out!',
    pokemon: 'I Hate Pokemon, Testing Redux'
  }

  // testingReducer('im awesome')
  // dispatch(testingReducer('im awesome'))
  // dispatch(fetchPokemon())
  
  console.log(pokemonReducers)
  // Storing navWords in useState to be used in my nav
  const [navWording, setNavWording] = useState(navWords.home)

  // Returning my Website
  return (
    // <Provider store={storing} >
    // <BrowserRouter>
    <div className='BodyAuty'>
        <div className='Navigate'>
          <div className='Nav-Intro'>
            <p>{navWording}</p>
          </div>
          <nav>
            {/* <Link to='/' className='Link' id='HomeButton' onClick={() => setNavWording(navWords.home)}>Home</Link>
            <Link to='/gaming' className='Link' onClick={()=> setNavWording(navWords.gaming)}>Gaming</Link>
            <Link to='/cooking'className='Link' onClick={()=> setNavWording(navWords.cooking)}>Cooking</Link>
            <Link to='/pokemon'className='Link' onClick={()=> setNavWording(navWords.pokemon)}>Pokemon</Link> */}
            {/* <Link to='/gaming/1'>Test</Link>
            <Link to='/gaming/2'>Test</Link>
            <Link to='/gaming/3'>Test</Link> */}
          </nav>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>


        {/* <Switch>
          <Route path='/pokemon'>
            <Pokemon pokemon={fetchPokemon} />
          </Route>
          <Route path='/cooking'>
            <Cooking/>
          </Route>
          <Route path='/gaming/:viral'>
            <Games/>
          </Route>
          <Route path='/gaming'>
            <Gaming/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch> */}
    </div>
    // {/* </BrowserRouter>
    // </Provider> */}
  );
}

function GrabbingStorage(state){
  return {
    pokemonReducers: state
  }
}

export default connect(GrabbingStorage)(App)
