//import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';

import ColorButton from './components/child11.1/child11.1'
class App extends Component {

  state = {
    Colors: ['blue', 'red', 'yellow'],
    color: ''
  }

  ParentColorHandler = (e) => {
    this.setState({
      color: e
    })
  }
  render() {
    return (
      <div>
        {
          this.state.Colors.map((p, index) => {
            return <ColorButton color={p} key={index} ParentColorHandler={this.ParentColorHandler} />
          })
        }

        <div className={"box " + this.state.color}>

        </div>

      </div>
    )
  }
}
export default App;
