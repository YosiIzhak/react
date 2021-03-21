import react from 'react';
//import axios from 'axios';
import data from './data'
import Name from './name13.1'
import Card from './card13.1'
export default class Data extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: data.data,
            names: [],
            before: []
        }

    }

    componentDidMount() {
        console.log(this.state.persons)
        this.names()
        console.log(this.state.names)
        this.before()
        console.log(this.state.before)

    }
    before = () => {

        const mybefore = this.state.persons.filter(x => {
            return x.birthday.split('').slice(-2).join('') < 90

        })
        this.setState({ names: mybefore })
    }
    names = () => {

        const name = this.state.persons.map(x => {

            return x.name
        })
        this.setState({ names: name })

    }
    render() {
        console.log(this.state.names)
        console.log(this.state.mybefore)

        return (
            <div>
                {this.state.names.map(x => {
                    return <Name names={x}></Name>


                })}
                {this.state.mybefore.map(x => {
                    return <Card name={x.name} birthday={x.birthday} favoriteFoods={x.favoriteFoods}></Card>
                })}
            </div>



        )

    }
}
