//import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';

import CheckBox from './components/check11.2/check11.2'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      terms: [
        { id: 1, value: "i read", checked: false },
        { id: 2, value: "i accept", checked: false },
        { id: 3, value: "yes", checked: true },
        { id: 4, value: "no", checked: true }
      ]
     
    }
  }

  

  render() {
    return (
      <div>
        {
          this.state.terms.map((p) => {
            return <CheckBox key={p.id} value={p.value} checked={p.checked} />
          })
        }

      </div>
    );
  }
}
export default App