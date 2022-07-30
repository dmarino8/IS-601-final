import { useState } from 'react';
import './PokemonSelector.css';
const PokemonList = ({pokemonOptions, setPokemonSelected}) => {
    function changeBackgroundTrue(e) {
        e.target.style.background = '#c7a008';
    }
    function changeBackgroundFalse(e) {
        e.target.style.background = '#ffcb05';
    }
    return (
        pokemonOptions.map(pokemon =>
            <div className="grid-item" onClick={() => setPokemonSelected(pokemon.pokemon_species.name)} onMouseOver={changeBackgroundTrue} onMouseLeave={changeBackgroundFalse}>
                {pokemon.pokemon_species.name}
            </div>
        )
    )
}

export default PokemonList