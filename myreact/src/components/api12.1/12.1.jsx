import react from 'react';
import axios from 'axios';

export default class Api extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            term: 'random',
            categories: []
        }
    }

    async componentDidMount() {
        const request = await axios.get('https://api.chucknorris.io/jokes/categories')
        this.setState({ categories: request.data })

    }
    CategorySelect = (e) => {
        this.setState({
            term: e.target.value
        })
    }
    getJoke = async () => {
        let cat;
        if (this.state.term === 'random') {
            cat = await axios.get('https://api.chucknorris.io/jokes/random')
        }
        else {
            cat = await axios.get('https://api.chucknorris.io/jokes/random?category=${this.state.term}')
        }
        this.setState({
            joke: cat.data.value
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.getJoke}>click me</button>
                <select name="" id="" onChange={this.CategorySelect}>
                    {
                        this.state.categories.map((x) => {
                            return <option value={x} key={x}>{x}</option>
                        })
                    }
                </select>
                <p>{this.state.joke}</p>
            </div>
        )
    }
}
