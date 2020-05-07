import React, {Component} from 'react';
import Die from './Die/Die'
import './Rolldice.css'

let p1Value =0;
let p2Value =0;

class Rolldice extends Component {
    
    state = {
        die1: 'one',
        die2: 'two',
        player: 1
    }

    static   = ['one','two','three','four','five','six'];
    roll = () => {
        const index1 = this.static[Math.floor(Math.random() * this.static.length)];
        p1Value = this.static.indexOf(index1) + 1;
        const index2 = this.static[Math.floor(Math.random() * this.static.length)];
        p2Value = this.static.indexOf(index2) + 1;
        if (index1 !== index2){

            this.setState({die1: index1, die2: index2});
        }
        this.setState({player: this.state.player == 2 ? 1 : 2 })
    }

    render() {
        const RolldiceClass = this.state.player == 2 ? 'Rolldice1' : 'Rolldice2';
        return (
                <div className={RolldiceClass}>
                    <Die
                        player={this.state.player}
                        face={this.state.die1} />
                    <Die
                        player={this.state.player}
                        face={this.state.die2} />
                    <h1>    
                    <button onClick={this.roll.bind(this)}>ROLL</button>
                    </h1>
                    <h1>Player {this.state.player}'s Turn</h1>
                </div>
        )
    }

}

export default Rolldice;
export {p1Value}
export {p2Value}