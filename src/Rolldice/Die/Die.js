import React, {Component} from 'react';
import './Die.css';

class Die extends Component {

    render() {
        const dieColor = this.props.player == 1 ? 'Player1' : 'Player2';
        return (
            <i className={`${dieColor} fas fa-dice-${this.props.face}`}></i>
        )
    }
}

export default Die;