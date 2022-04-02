import './App.css';
import { useState } from 'react';
import { Link, Route, Switch}from 'react-router-dom';
import Gaming from './Gaming Components/Gaming';
import Games from './Gaming Components/Games';
// Goals: Add a video on my webpage/ Add moving png jpeg images on my webpage

function App() {
  // Storing Welcome words in a Variable
  const navWords = {
    home: 'Welcome to my Home!',
    gaming: 'Super Awesome Gaming Area!'
  }

  // Storing navWords in useState to be used in my nav
  const [navWording, setNavWording] = useState(navWords.home)

  // Returning my Website
  return (
   <div>
      <div className='Navigate'>
        <div className='Nav-Intro'>
          <p>{navWording}</p>
        </div>
        <nav>
          <Link to='/' className='Link' id='HomeButton' onClick={() => setNavWording(navWords.home)}>Home</Link>
          <Link to='/gaming' className='Link' onClick={()=> {setNavWording(navWords.gaming)}}>Gaming</Link>
          {/* <Link to='/gaming/1'>Test</Link>
          <Link to='/gaming/2'>Test</Link>
          <Link to='/gaming/3'>Test</Link> */}
        </nav>
      </div>

      <Switch>
        <Route path='/gaming/:viral'>
          <Games/>
        </Route>
        <Route path='/gaming'>
          <Gaming/>
        </Route>
        <Route path='/'>
          Hi Sheeple!
        </Route>
      </Switch>
   </div>
  );
}

export default App;
