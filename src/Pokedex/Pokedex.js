import React, {Component} from 'react';
import Pokecard from './Pokecard/Pokecard'
import './Pokedex.css';

class Pokedex extends Component{

    render() {

        return(
            <div className="Pokedex">
                <div className="Pokedex-cards">
                    {this.props.data.map((poke) => (
                        <Pokecard
                            name={poke.name}
                            type={poke.type}
                            exp={poke.exp}
                            id={poke.id}
                        />
                    ))}
                </div>
            </div>
        );

    }

}
export default Pokedex
