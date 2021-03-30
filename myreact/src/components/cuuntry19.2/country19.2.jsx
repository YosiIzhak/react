import React, { useState, useEffect } from 'react';
import axios from 'axios'
function Country() {
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState('')
   
    useEffect(() => {
        const req = async () => {
        let response = await axios.get('https://restcountries.eu/rest/v2/all')
        setCountry(response.data)
        }
      req();
    }, []);
   
        const myFilter = (e) => {
            setSearch(e.target.value);
        }
      const GetResFilter =()=>{
          return country.filter((x)=>{
            return x.name.toLowerCase().startsWith(search);
          }).map((x)=>{
              return<div>{x.name}</div>
          })
      }
    

    return (
        <div className="app">
            <label>Search</label>
            <input type={'text'} value={search} onChange={myFilter}/>
            <GetResFilter/>
            {

                country.map((x, index) => {
                    return <h6 key={index}>{x.name}</h6>
                })}


        </div>
    );
}
export default Country;