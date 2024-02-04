import React from 'react';
import './Country.css';
const Country = (props) => {
    const countries = props.country;
  
 
    console.log(countries);

    return (
        <div>
           <div className='countryInfo'>
               <img src={countries.flags.png} alt="" />
               <div className="description">
               <h2>{countries.name.common}</h2>
                <h4>Population: {countries.population}</h4>
                <h4>Capital: {countries.capital}</h4>
                 <h4>Region: {countries.region}</h4>
                 <img src={countries.maps.googleMaps} alt="" />
               </div>   
           </div>
            
        </div>
    );
};

export default Country;