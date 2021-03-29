import React, { useState } from 'react';


function Time() {
    const [sec, setSec] = useState('')
    const [min, setMin] = useState('')
    const [hour, setHour] = useState('')


    const changeHandleSec = e => {
        setSec(e.target.value)
        setMin(sec / 60)
        setHour(sec / 3600)
    }
    const changeHandleHour = e => {
        setSec(hour*3600)
        setMin(hour * 60)
        setHour(e.target.value)
    }
    const changeHandleMin = e => {
        setMin(e.target.value)
        setSec(min*60)
        setHour(min / 60)
    }

    return (
        <div className="app">
            <label>
                Seconds:
            <input type="number" name="seconds" value={sec} onChange={changeHandleSec} />
            </label>
            <label>
                minutes:
             <input type="number" value={min} name="minutes" onChange={changeHandleMin} />
            </label>
            <label>
                hours:
             <input type="number" value={hour} name="hours" onChange={changeHandleHour} />
            </label>

        </div>
    );
}
export default Time;