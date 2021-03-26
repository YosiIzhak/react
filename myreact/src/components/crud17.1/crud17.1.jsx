import axios from 'axios';
import react from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

//import usersApi from './api'
const BASE_URL = "https://605b25de27f0050017c0649d.mockapi.io/users";
export default class PersonList extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading:true
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
   
    deleteUser(id, e){
        axios.delete(`${BASE_URL}/${id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
      
            const users = this.state.users.filter(item => item.id !== id);
            this.setState({ users });
          })
      
      }



    editUser = async (id, e) => {
      const res =  await axios.put(`${BASE_URL}/${id}`,{name:'yosi'});
      console.log(res)
    }
    async loadData(){
        const response = await axios.get(`${BASE_URL}`)
        const users = response.data;
        this.setState({
          loading:false,
          users:users
        });
    }
      componentDidMount(){
        this.loadData();
      }
   
   


    addUser = async () => {
        await axios.post(`${BASE_URL}`, { name: 'yosi' });
    }



    render() {
        if(this.state.loading){
            return ( <Loader type="Circles" color="#00BFFF" height={80} width={80}/>);
          }
          else {
        return (
            <div>
                {/* <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                /> */}
                <h2 className="text-center">Users List</h2>
                <div className="row">
                    <button onClick={this.addUser}> Add User</button>
                </div>
                <br></br>
                <div className="row">
                    <table >

                        <thead>
                            <tr>
                                <th> User First Name</th>
                                <th> User Last Name</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.name} </td>
                                            <td> {user.avatar}</td>
                                            <td>
                                                <button style={{ marginLeft: "10px" }} onClick={(e) => this.editUser(user.id, e)}>Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={(e) => this.deleteUser(user.id, e)}>Delete </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }}
}