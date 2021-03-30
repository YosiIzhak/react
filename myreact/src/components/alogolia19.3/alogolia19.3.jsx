import React, { useState, useEffect } from 'react';
import axios from 'axios'
function Alogo() {
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState('hooks')
    const [submit, setSubmit] = useState('hooks')

    useEffect(() => {
        const req = async () => {
            try {
                const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`)
                setResult(response.data.hits)
            } catch (e) {
                console.log('error')
            }
        }
        req();
    }, [search]);

    const mySearch = (e) => {
        setSubmit(e.target.value);
    }

    const GetSubmit = () => {
        setSearch(submit)

    }


    return (
        <div className="app">
            <label>Search</label>
            <input type={'text'} value={submit} onChange={(e)=>{mySearch(e)}} />
            <input type={'button'} value='click' onClick={GetSubmit} />
            {
             result.map((x,index) => {
            return <h5 key={index}>{x.title}</h5>
        })
    }

        </div>
    );
}
export default Alogo;