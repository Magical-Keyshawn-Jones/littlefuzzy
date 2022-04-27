import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link}from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { grabbingPokemons } from './Redux Related/Reducers';
import {Pokemon, Cooking, Gaming, Games, Home} from './Export Files/AppRouteExports'

// import * as actionCreators from './Redux Related/Action-Creators'
// Add moving png jpeg images on my webpage
// Add a form that contributes to making something
// Add a hover mechanic for accessibility (Like showing words)
// Make font smaller 
// Try to add a legacy Class Components instead function components for practice
// Create a random form wording adjective, verb, noun, thing
// Try Using Position and Display css more often 
// End Goal, fill up the entire page (It's like art class the more empty it is the more there is to improve on it)

 function App (props) {
  const { 
    pokemonReducer,
   } = props
  const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(grabbingPokemons())
 },[])

 console.log(pokemonReducer)

  // Storing Welcome words in a Variable
  const navWords = {
    home: 'Welcome to my Home!',
    gaming: 'Super Awesome Gaming Area!',
    cooking: 'Ruthy-G Cooking Shout out!',
    pokemon: 'I Hate Pokemon, Testing Redux'
  }

  const [navWording, setNavWording] = useState(navWords.home)

  return (
    <div className='BodyAuty'>
        <div className='Navigate'>
          <div className='Nav-Intro'>
            <p>{navWording}</p>
          </div>
          <nav>
            <Link to='/' className='Link' id='HomeButton' onClick={() => setNavWording(navWords.home)}>Home</Link>
            <Link to='/gaming' className='Link' onClick={()=> setNavWording(navWords.gaming)}>Gaming</Link>
            <Link to='/cooking'className='Link' onClick={()=> setNavWording(navWords.cooking)}>Cooking</Link>
            <Link to='/pokemon'className='Link' onClick={()=> setNavWording(navWords.pokemon)}>Pokemon</Link>

            {/* <NavLink to='/' className='Link' id='HomeButton' onClick={() => setNavWording(navWords.home)}>Home</NavLink>
            <NavLink to='/gaming' className='Link' onClick={()=> setNavWording(navWords.gaming)}>Gaming</NavLink>
            <NavLink to='/cooking'className='Link' onClick={()=> setNavWording(navWords.cooking)}>Cooking</NavLink>
            <NavLink to='/pokemon'className='Link' onClick={()=> setNavWording(navWords.pokemon)}>Pokemon</NavLink> */}
            
                        {/* <Link to='/gaming/1'>Test</Link>
                        <Link to='/gaming/2'>Test</Link>
                        <Link to='/gaming/3'>Test</Link> */}
          </nav>
        </div>

        <Routes>
          <Route path='/pokemon/*' element={<Pokemon pokemon={pokemonReducer} />}/>
          <Route path='/cooking' element={<Cooking/>}/>
          <Route path='/gaming/:viral' element={<Games/>}/>
          <Route path='/gaming' element={<Gaming/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  );
}

function GrabbingStorage(state){
  console.log(state)
  return {
    pokemonReducer: state.pokemon
  }
}

export default connect(GrabbingStorage)(App)
