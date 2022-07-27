import React, { useState } from 'react'
import PokemonInfoImage from './PokemonInfoImage';
import PokemonInfoAbilities from './PokemonInfoAbilities';
import PokemonInfoBaseStats from './PokemonInfoBaseStats';
import PokemonInfoType from './PokemonInfoType';
const PokemonInfo = ({ pokemon, back }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const fetchDetailsData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        response
            .json()
            .then(response => setPokemonDetails(response))
    }
    fetchDetailsData();
    return (
        <div>
        <PokemonInfoImage pokemon={pokemonDetails}/>
        <PokemonInfoAbilities pokemon={pokemonDetails}/>
        <PokemonInfoBaseStats pokemon={pokemonDetails}/>
        <PokemonInfoType pokemon={pokemonDetails}/>
        <button onClick={() => back()}>Back</button>
        </div>
    )
}

export default PokemonInfo