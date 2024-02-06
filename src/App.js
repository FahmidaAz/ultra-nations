import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country';

function App() {
  const [countries,setCountry] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data =>{setCountry(data)
      const name = data.map(country =>country.name.common);
    
    });
   
   
  },[])
  const handleClick = (country) =>{
    const newCart = [...cart,country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <div className="navBar">
        <h5>Your countries:{cart.length}</h5>
        </div> 
     {countries.map(country => <Country country={country} clickHandle={handleClick} ></Country>) }
       
    </div>
  );
}

export default App;
