import React from 'react'
import './child11.1.css'


class ColorButton extends React.Component {

    constructor(props) {
        super(props);
      
    }
    ButttonColorsHandler = (e) =>{
      
        this.props.ParentColorHandler(e.target.value)     
       
     }

    render() {
        return (

            <div>
                <button className={this.props.color} onClick={this.ButttonColorsHandler} type="button" value={this.props.color}>{this.props.color}</button>
            </div>
        )
    }
}
export default ColorButton;