import React, { useState } from 'react';
import './check18.4.css'
function Check() {
    const names=["one", "two", "three", "four", "five"];
    const [checkBoxes, SetCheckBoxes] = React.useState([
        { name: "one", check: false },
        { name: "two", check: false },
        { name: "three", check: false },
        { name: "four", check: false },
        { name: "five", check: false }])
    const changeCheck = (id) => {
        const box = [...checkBoxes]
        box[id].check = !box[id].check
        SetCheckBoxes(box)
    }

    const resetAll = ()=>{
       const arr = names.map((x, index) => {
            return (
                <input type="checkbox" key={x} id={index} label={x.name} check={false} onClick={() => changeCheck(index)} />
            )
        })
        SetCheckBoxes(arr)
    }
    
    const deleteChecked = () => {
        let boxes = checkBoxes.filter((x) => {
            return x.check == false
        })
        SetCheckBoxes(boxes)
    }
    return (
        <div className="allCheck">
            {
                checkBoxes.map((x, index) => {
                    return (
                        <input type="checkbox" key={x.name} id={index} label={x.name} onClick={() => changeCheck(index)} />
                    )
                })
            }
            < input type="button" className="btn" value="delete" onClick={deleteChecked} />
            <input type="button" className="btn" value="reset" onClick={resetAll} />


        </div >
    );
}
export default Check;
