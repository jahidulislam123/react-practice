import React, { useEffect, useState } from 'react';
import Country from './Country';
import './Countries.css'


const Countries = () => {
    const[countris,setCountris]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountris(data));
    },[])


    return (
        <div>
            <h3>Hi all the country are available here </h3>
           <div className='paia' >
           {
                countris.map(country=> <Country
                    all={country}
                
                
                
                    ></Country> )
            }
           </div>
        </div>
    );
};

export default Countries;