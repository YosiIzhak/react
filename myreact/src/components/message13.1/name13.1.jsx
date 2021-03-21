import react from 'react';
//import axios from 'axios';
export default class Names extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <div>
            {this.props.names}
            </div>
        )

    }
}
