import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './cancel20.1.css'
const CancelToken = axios.CancelToken;
let source = CancelToken.source();

function Cancel() {
    const [result, setResult] = useState([]);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        const req =async () => {
            if (toggle) {
                const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=hooks`,
                {
                    cancelToken: source.token, 
                  }).catch(function (thrown) {
                    if (axios.isCancel(thrown)) {
                      console.log('Request canceled', thrown.message);
                    } else {
                      // handle error
                    }
                  });
                setResult(response.data.hits)
            }
        }
        req();
       
    }, [toggle]);
    const display =async () => {
        setToggle(!toggle)
    }
    const Results = () => (
        <div id="results" className="search-results">
         { result.map((x, index) => {
                    return <p key={index}><a href={x.url} target="_blank">{x.title}</a></p>
                })}
        </div>
      )
    return (
        <div className="app" >
            <label className="switch">
                <input type="checkbox" onClick={display} />
                <span className="slider"></span>
            </label>
            { toggle ? <Results /> : null }

        </div>
    )

}
export default Cancel;