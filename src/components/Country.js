import React from 'react';

const Country = (props) => {
    const countries = props.country;
  
  

    return (
        <div>
            <h1>Country Loaded:{countries.length}</h1>
            <ul>
                
            </ul>
        </div>
    );
};

export default Country;