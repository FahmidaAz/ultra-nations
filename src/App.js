import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country';

function App() {
  const [country,setCountry] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data =>{setCountry(data)
      // const name = data.map(country =>country.name.common);
      // console.log(name);
    });
   
   
  },[])
  return (
    <div className="App">
      <Country country={country} ></Country>
        
    </div>
  );
}

export default App;
