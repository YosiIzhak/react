import React, {  useState,useRef } from 'react';
import pic from './img/pic1.jpg'
import morepic from './img/pic2.jpg'
import picColor from './img/pic1color.jpg'
import morepicColor from './img/pic2color.jpg'

import './image21.3.css'
      
       //   <img src={morepic} alt="bbb" width="500" height="300"/>
      

const Image = () => {
    const [colorOne, setColorOne] = useState(false);
    const [colorTwo, setColorTwo] = useState(false);
    const imageRef = useRef(null);
    const moreImageRef = useRef(null);
  
    function handleMouse() {
      console.log("handleMouseOver");
      imageRef.current.src = picColor;
    }
    function moreHandleMouse() {
      console.log("handleMouseOver");
      moreImageRef.current.src = morepicColor;
    }
    function handleMouseOut() {
      console.log("handleMouseOver");
      imageRef.current.src = pic;
    }
    function moreHandleMouseOut() {
      console.log("handleMouseOver");
      moreImageRef.current.src = morepic;
    }
  
    return (
        <div>
      <img ref={imageRef} src={pic} onMouseOver={handleMouse} onMouseOut={handleMouseOut} alt="image here" width="500" height="300"/>
      <img ref={moreImageRef} src={morepic} onMouseOver={moreHandleMouse} onMouseOut={moreHandleMouseOut} alt="image here" width="500" height="300"/>
      </div>
    );
  };
  
  export default Image;