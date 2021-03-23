import react from 'react';
import { Link } from 'react-router-dom';
import './router16.1.css';
// import HomePage from './router16.1'
// import Product from './product16.1'
export default class Header extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""

        }
        this.textInput = react.createRef();
        this.selectTextInput = this.selectTextInput.bind(this);
    }
    selectTextInput() {
       this.setState({value:this.textInput.current.value})
        
      
    }

    render() {
        return (
            <div >
          
            <div className="header">
              <Link to="/" className="homeLink" >home </Link>
              <Link to="/products" className="productLink">product</Link>
            </div>
           
          
          
         
            </div>
        );
    }
}
