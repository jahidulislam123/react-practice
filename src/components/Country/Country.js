import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area,name,flags}=props.all;
    return (
        <div className='papua' >
            <h3>All the country name are : {name.common}</h3>
            <h4>Capital:{area}</h4>
            <img src={flags.png} alt="" />

            
        </div>
    );
};

export default Country;