import './App.css';
import { useState } from 'react';
import { Link, Route, Switch}from 'react-router-dom';
import Cooking from './Cooking Components/Cooking';
import Gaming from './Gaming Components/Gaming';
import Games from './Gaming Components/Games';
import Home from './Home Components/Home';
// Add moving png jpeg images on my webpage
// Add a form that contributes to making something
// Add a hover mechanic for accessibility (Like showing words)
// Make font smaller 
// Try to add a legacy Class Components instead function components for practice
// End Goal, fill up the entire page (It's like art class the more empty it is the more there is to improve on it)

function App() {
  // Storing Welcome words in a Variable
  const navWords = {
    home: 'Welcome to my Home!',
    gaming: 'Super Awesome Gaming Area!',
    cooking: 'Ruthy-G Cooking Shout out!'
  }
something has changed
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
          <Link to='/cooking'className='Link' onClick={()=> setNavWording(navWords.cooking)} >Cooking</Link>
          {/* <Link to='/gaming/1'>Test</Link>
          <Link to='/gaming/2'>Test</Link>
          <Link to='/gaming/3'>Test</Link> */}
        </nav>
      </div>

      <Switch>
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

export default App;
