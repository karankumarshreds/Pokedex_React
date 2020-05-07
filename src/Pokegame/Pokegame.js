import React, {Component} from 'react';
import Pokedex from '../Pokedex/Pokedex'; 
import './Pokegame.css';

class Pokegame extends Component{

    state = {
        pokemon : [
            { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
            { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
            { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', exp: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', exp: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', exp: 98 },
            { id: 94, name: 'Gengar', type: 'poison', exp: 225 },
            { id: 133, name: 'Eevee', type: 'normal', exp: 65 },
        ]
    };

    render() {
        let hand1 = [];
        let hand2 = [...this.state.pokemon];

        while (hand1.length < hand2.length){
            let index = Math.floor(Math.random()*hand2.length);
            hand1.push(hand2[index]);
            hand2.splice(index, 1);
        } 

        const score = (hand) => {
            let total = 0;
            for(let h of hand) {
                total = total + h.exp;
            }
            return total;
        }

        return  (
            <div>
                <div>
                    <h1
                        className={score(hand1) > score(hand2) ? 'Win' : 'Lose'}
                    >
                        {score(hand1) > score(hand2) ? 'Winning Hand' : 'Losing Hand'}
                    </h1>
                    <Pokedex
                        data={hand1}
                    />
                </div>
            
                <div>
                    <h1
                        className={score(hand1) < score(hand2) ? 'Win' : 'Lose'}
                    >
                        {score(hand2) > score(hand1) ? 'Winning Hand' : 'Losing Hand'}
                    </h1>
                    <Pokedex
                        data={hand2}
                    />
                </div>
            </div>
        )

    }

}

export default Pokegame 
