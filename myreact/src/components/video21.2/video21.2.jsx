import React, { useState, useEffect, useRef } from 'react';
import song from '../../../src/song.mp4'

function Video() {
    const vidRef = useRef(null);
    // const [toggle, setToggle] = useState(true);


    const playVideo = () => {
        vidRef.current.play();
    }
    const pauseVideo = () => {
        vidRef.current.pause();
    }

    return (
        <div>
            <video ref ={vidRef}  width='750' height='450' controls>
                <source src={song} type="video/mp4"/></video>
            <div>
                <input type="button" id='play' onClick={playVideo} value='play'/>
                <input type="button" id='pause' onClick={pauseVideo} value='pause'/>
            </div>

        </div>
    )


}
export default Video;