import React, { useState } from 'react';
import './text18.1.css'
function Read() {
    const [readMore, setReadMore] = useState(false);
    const [maxLength, setMaxLength] = useState(20);
    const firstText = <div>
        {/* <p className="first">
            Lorem{setMaxLength(maxLength)}
        </p> */}
    </div>
    const extraContent = <div>
        <p className="extra-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
            commodi officia aliquam! Maxime.
      </p>
    </div>
    const linkName = readMore ? 'Read Less << ' : 'Read More >> '
    return (
        <div className="App">
            {firstText}
            {readMore && extraContent}
            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{linkName}</h2></a>

        </div>
    );
}
export default Read;