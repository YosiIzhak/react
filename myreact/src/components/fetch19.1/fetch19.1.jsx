import React, { useState, useEffect } from 'react';
import axios from 'axios'
function Fetch() {
    const [film, setFilm] = useState('');

   useEffect(() =>{
     axios.get('https://swapi.dev/api/films/1/')
    .then((response) =>{
       // console.log(response.data.title)
        setFilm(response.data)
    })
   },[]) ;

    return (
        <div className="app">
          <h1>{film.title}</h1>
          <h1>{film.director}</h1>

        </div>
    );
}
export default Fetch;