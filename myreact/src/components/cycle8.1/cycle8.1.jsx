import React from 'react'
import './cycle8.1.css'
class Color extends React.Component {
 
    constructor(props){
        super(props);
        this.state={
            favoriteColor:"green"
        }
    }
    componentDidMount() {
        console.log("[componentDidMount]")
       setTimeout(()=>{
           this.setState({favoriteColor : this.state.favoriteColor = "red"})
       },1000)
    }
    componentDidUpdate() {
        console.log("[componentDidUpdate]")
        document.getElementById("abc").innerHTML = `the update faforite color is ${this.state.favoriteColor}`;
    //    setTimeout(()=>{
    //        this.setState({favoriteColor : this.state.favoriteColor = "red"})
    //    },1000)
    }

 
   render(){
    return (
      <div className="App">
          <div>
        <h1>my favorite color is {this.state.favoriteColor}</h1>
          </div>
          <div id="abc"> </div>
      </div>
    );
  }
}
 export default Color;