import react from 'react';
import { Link  } from 'react-router-dom';
import data from './store'
export default class Product extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []

        }
      
    }
   
    async componentDidMount() {
        this.setState({products : data.data});
    }
  
    render() {
        return (
            <div>
                  {this.state.products.map(product => {
                return <Link to={`/products/${product.id}`} key={product.title} className="productLink">{product.title}</Link>
            })
            }
                  {this.state.products.map(product => {
                    return <p key={product.id}>{product.title} </p>
                })}
            </div>
        );
    }
}
