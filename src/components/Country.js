import React from 'react';

const Country = (props) => {
    const countries = props.country;
  
  

    return (
        <div>
            <h1>Country Loaded:{countries.length}</h1>

            <ul>
               {
                countries.map(country => <li>{country.name.common}</li>)
               } 
            </ul>
        </div>
    );
};

export default Country;