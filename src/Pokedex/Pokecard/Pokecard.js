import React, {Component} from 'react'
import './Pokecard.css'; 


// const POKE_API="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component{
    render(){

        let id = this.props.id <= 999 ? `00${this.props.id}`.slice(-3) : this.props.id
        let imgSrc = `${POKE_API}${id}.png`

        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title ">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img className="Pokemon" src={imgSrc}/>
                </div>
                <div className="Pokecard-data">
                    Type: {this.props.type}
                </div>
                <div className="Pokecard-data">
                    EXP: {this.props.exp}
                </div>
            </div>
        );
    }

}

export default Pokecard;