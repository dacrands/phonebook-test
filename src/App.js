import './App.css';
import { useEffect } from 'react';
import initListings from './data/initListings';


function App() {  
  useEffect(() => {
    initListings();    
  }, [])
  return (
    <div>
      <header>
        <h1>Phonebook App</h1>
      </header>
    </div>
  );
}

export default App;
