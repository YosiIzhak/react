
import React, { Component } from 'react';


class Button extends Component {
    constructor(props) {
        super(props);

    }
    render() {
      return(
          <div>
        <button style={{fontWeight: this.props.weight}}>{this.props.children} </button>
     
        </div>
      ) 
  }
}

export default Button;
