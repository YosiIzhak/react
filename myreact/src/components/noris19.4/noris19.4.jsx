import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api  (){
    const [categories, setCetegories]=useState('');
    const [term, setTerm]=useState('random');
    const [joke, setJoke]=useState('');
   
           
 
            useEffect(() => {
        const req = async ()=>{
           const response = await axios.get('https://api.chucknorris.io/jokes/categories')
           setCetegories(response.data )
        }
        req();
    }, []);
       

    }
     const categorySelect = (e) => {
        setTerm(e.target.value)
    }
     const getJoke = async () => {
        let cat;
        if (term === 'random') {
            cat = await axios.get('https://api.chucknorris.io/jokes/random')
        }
        else {
            cat = await axios.get('https://api.chucknorris.io/jokes/random?category=${term}')
        }
        setJoke(cat.data.value)
    }

        return (
            <div>
                <button onClick={getJoke}>click me</button>
                <select name="" id="" onChange={categorySelect}>
                    {
                        categories.map((x) => {
                            return <option value={x} key={x}>{x}</option>
                        })
                    }
                </select>
                <p>{joke}</p>
            </div>
        )
    }
}
export default Api