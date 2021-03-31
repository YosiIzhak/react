import React, { useState, useEffect, useRef } from 'react';



function Edit() {
    const inputRef = useRef(null);
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        if (!toggle) {
            inputRef.current.focus();
        }
    }, [toggle]);
    const change = () => {
        setToggle(!toggle)
    }
    if (toggle) {
        return (
            <div className="app" >
                <input type="button" value='edit' onClick={change} />
            </div>
        )
    } else {
        return (
            <div>
                <input type="button" value='save' onClick={change} />
                <input ref={inputRef} type="text" />
            </div>
        )
    }


}
export default Edit;