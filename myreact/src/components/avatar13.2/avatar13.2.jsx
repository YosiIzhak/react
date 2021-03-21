import react from 'react';
import axios from 'axios';
import Card from './card13.2'
export default class User extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            filterUsers: [],
            Search:'',
        }
    }

    async componentDidMount() {
        const request = await axios.get('https://randomuser.me/api/?results=10')
        this.setState({ users: request.data.results })
    }
    changeInputHander = (e) => {
        this.setState({
          Search: e.target.value,
        });
      };
      onClickSearchHandler = () => {
        let search = this.state.users.filter((p) => {
          return p.name.first.includes(this.state.Search);
        });
    
        this.setState({ filterUsers: search });
      };
    

    render() {
        let Display = this.state.filterUsers.map(p =>{
            return <Card firstname = {p.name.first} lastname = {p.name.last} picture = {p.picture.large}></Card>
        })
        return (
            <div>
        <input onChange={this.changeInputHander} />
        <button onClick={this.onClickSearchHandler}>Search</button>
        <div className="pics">
        {Display}
        </div>
      </div>
        )
    }
}
