import React from 'react'
//import './child11.1.css'


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           firstName:"",lastName:"",area:"",select:""   };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e){ 
        this.setState({ 
          [e.target.name] : e.target.value 
        }) 
      } 
      handleSubmit(e){ 
        const { name,last,  area, select } = this.state 
        e.preventDefault() 
        window.confirm(` 
          ____Your Details____\n 
          firstName : ${name} 
          lastName : ${last} 
        
          area : ${area} 
          select : ${select} 
        `) 
      } 

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    firstName:
              <input type="text" value={this.state.value}name="first" onChange={this.handleInputChange} />
                </label><br />
                <label>
                    lastName:
              <input type="text" value={this.state.value}name="last" onChange={this.handleInputChange} />
                </label>
                <label><br /><br />
          textArea:
          <textarea value={this.state.value}name="area" onChange={this.handleInputChange} />
                </label><br /><br />
                <label>
                    Pick your choose:
          <select value={this.state.value}name="select" onChange={this.handleInputChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default Form;