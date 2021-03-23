import React, { Component } from 'react'
import './card.css'
export default class Card extends Component {
    state = { person: this.props.person }

    render() {
        return (
            <div className='card'>
                <p>Name : {this.state.person.name}</p>
                <p>Birthday : {this.state.person.birthday}</p>
                <p>Favorite foods (meats): {this.state.person.favoriteFoods.meats.join(', ')}</p>
                <p>Favorite fises (fish): {this.state.person.favoriteFoods.fish.join(', ')}</p>
            </div>
        )
    }
}