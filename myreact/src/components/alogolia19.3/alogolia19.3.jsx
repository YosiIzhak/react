import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import './alogolia19.3.css'
function Alogo() {
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState('hooks')
    const [submit, setSubmit] = useState('hooks')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const req = async () => {
            try {
                const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`)
                setResult(response.data.hits)
                setLoading(false)
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
    if (loading) {
        return(
        <div className="load" >
        <Loader type="Circles" color="#00BFFF" height={180} width={180} />
        </div>
        )}
    else {
        return (
            <div className="app" >
                <label>Search</label>
                <input type={'text'} value={submit} onChange={(e) => { mySearch(e) }} />
                <input type={'button'} value='click' onClick={GetSubmit} />
                {
                    result.map((x, index) => {
                        return <p key={index}><a href={x.url} target="_blank">{x.title}</a></p>
                    })
                }

            </div >
        )
    }
}
export default Alogo;