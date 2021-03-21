import react from 'react';
//import axios from 'axios';
export default class Card extends react.Component {
    constructor(props) {
        super(props);
        state = {
            favoriteFoods: this.props.favoriteFoods,
            meats: [],
            fish: []
        }
    }
    componentDidMount(){
        this.getMeatsArrays()
        this.getFishArrays()
    }
    getMeatsArrays = () =>{
        
        let meat = this.state.favoriteFoods.meats.map(p =>{
            return p
        })
        this.setState({meats:meat})
    }

    getFishArrays = () =>{
        let fish = this.state.favoriteFoods.fish.map(p =>{
            return p
        })
        this.setState({fish:fish})
    }

    render() {
        return (
            <div>
                
                <div>
                <h1>{this.props.name}</h1>
                </div>
                <div>
                <h1>{this.props.birthday}</h1>
                </div>

                <div>
                    {
                       this.state.meats.map(p =>{
                           return <p>{p}</p> 
                       }) 
                    }
                    <hr/>
                </div>
                <div>
                      {this.state.fish.map(p =>{
                          return <p>{p}</p>
                      })}
                </div>
            </div>
        )
    }
}
