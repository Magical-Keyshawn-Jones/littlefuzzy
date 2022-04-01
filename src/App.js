import './App.css';
import { Route}from 'react-router-dom';

function App() {
  return (
   <div>
     <h1>My Home Page</h1>
      <Route path='/'>
        Hi Sheeple!
      </Route>
   </div>
  );
}

export default App;
