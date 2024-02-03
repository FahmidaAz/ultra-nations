import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [country,setCountry] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data =>setCountry(data));
     
  },[])
  return (
    <div className="App">
       <h1>Country Loaded: {country.length}</h1>
    </div>
  );
}

export default App;
