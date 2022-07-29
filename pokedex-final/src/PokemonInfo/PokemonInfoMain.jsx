import React, { useState, useEffect } from 'react'
import PokemonInfoImage from './PokemonInfoImage';
import PokemonInfoAbilities from './PokemonInfoAbilities';
import PokemonInfoBaseStats from './PokemonInfoBaseStats';
import PokemonInfoType from './PokemonInfoType';

const PokemonInfo = ({ setErrors, P, pokemonSelected, back }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const fetchPokemonData = async () => {
        try {
            const response = (await P.getPokemonByName(pokemonSelected));
            setPokemonDetails(response)
        } catch (e) {
            setErrors("Error, list of pokemon : " + e.message);
        }
    };
    
    useEffect(() => {
        fetchPokemonData();
    })
    return (
        <div>
        <PokemonInfoImage pokemonDetails={pokemonDetails}/>
        <PokemonInfoAbilities pokemonDetails={pokemonDetails}/>
        <PokemonInfoBaseStats pokemonDetails={pokemonDetails}/>
        <PokemonInfoType pokemonDetails={pokemonDetails}/>
        <button onClick={() => back()}>Back</button>
        </div>
    )
}

export default PokemonInfo