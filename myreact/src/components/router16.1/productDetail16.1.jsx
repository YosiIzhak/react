import react from 'react';
import { Link } from 'react-router-dom';
import data from './store';

class ProductDetail extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            products: data.data

        }

    }

    render() {
        return (
            <div className='card'>
                <p>Name : {this.state.products[this.state.id].title}</p>
                <img alt="details" src={this.state.products[this.state.id].imageUrl} />
                <p>price: {this.state.products[this.state.id].price}</p>
                <p>size: {this.state.products[this.state.id].size}</p>
                <Link to="/products">
                    <button type="button">Back!</button>
                </Link>
            </div>
        )
    }
}

export default ProductDetail;