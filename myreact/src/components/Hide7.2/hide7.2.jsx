import React from 'react'
import './hide7.2.css'
class Hide extends React.Component {
 
    constructor(props){
        super(props);
        this.state={
            show:true
        }
    }
  
 
   render(){
    return (
      <div className="App">
          <div>
          <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} box</button>
              {
                  this.state.show? <div className="box"></div> : null
              }
             
          </div>
      </div>
    );
  }
}
 export default Hide;