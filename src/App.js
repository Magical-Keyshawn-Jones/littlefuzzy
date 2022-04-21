import './App.css';
import { useState } from 'react';
import { Link, Route, Switch}from 'react-router-dom';
import { connect } from 'react-redux';
import {Pokemon, Cooking, Gaming, Games, Home} from './Export Files/AppRouteExports'
// Add moving png jpeg images on my webpage
// Add a form that contributes to making something
// Add a hover mechanic for accessibility (Like showing words)
// Make font smaller 
// Try to add a legacy Class Components instead function components for practice
// Create a random form wording adjective, verb, noun, thing
// Try Using Position and Display css more often 
// End Goal, fill up the entire page (It's like art class the more empty it is the more there is to improve on it)

function App (props) {
  // Testing connect Redux
  // const {movies, moviesToWatch, user} = props
  // console.log(user)
  // console.log(movies)
  // console.log(moviesToWatch)

  // Storing Welcome words in a Variable
  const navWords = {
    home: 'Welcome to my Home!',
    gaming: 'Super Awesome Gaming Area!',
    cooking: 'Ruthy-G Cooking Shout out!',
    pokemon: 'I Hate Pokemon, Testing Redux'
  }

  // Storing navWords in useState to be used in my nav
  const [navWording, setNavWording] = useState(navWords.home)

  // Returning my Website
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
          {/* <Link to='/gaming/1'>Test</Link>
          <Link to='/gaming/2'>Test</Link>
          <Link to='/gaming/3'>Test</Link> */}
        </nav>
      </div>

      <Switch>
        <Route path='/pokemon'>
          <Pokemon/>
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
      </Switch>
   </div>
  );
}

// export default App;

function GrabbingStorage (state) {
  return {
    movies: state.information.movies,

    moviesToWatch: state.information.moviesToWatch,

    user: state.information.user
}
}

export default connect(GrabbingStorage, {})(App)
