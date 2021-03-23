import react from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

export default class HomePage extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""

        }

    }


    // async componentDidMount() {

    // }

    render() {
        return (
            <div>
                <h1> my home page</h1>

            </div>
        );
    }
}
