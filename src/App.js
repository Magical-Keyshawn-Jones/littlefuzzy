import './App.css';
import { Link, Route, Switch}from 'react-router-dom';
import Gaming from './Gaming Components/Gaming';
import Games from './Gaming Components/Games';

function App() {
  // Add a onChange for nav navigation. Create a function that changes what the Nav, H1 says. Example "Welcome, to my homepage! Welcome, to my Favorite Games!"
  
  return (
   <div>
      <div className='Navigate'>
        <div className='Nav-Intro'>
          <p>Welcome to My Home</p>
        </div>
        <nav>
          <Link to='/' className='Link' id='HomeButton'>Home</Link>
          <Link to='/gaming' className='Link'>Gaming</Link>
          <Link to='/gaming/1'>Test</Link>
          <Link to='/gaming/2'>Test</Link>
          <Link to='/gaming/3'>Test</Link>
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
