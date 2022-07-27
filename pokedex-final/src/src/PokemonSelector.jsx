import React, { useState } from 'react'
import PokemonInfoMain from './PokemonInfo/PokemonInfoMain.jsx';
import PokemonList from './PokemonList.jsx';
const PokemonSelector = ({pokedex, backToPokedexSelect}) => {
    
    const [pokemonOptions, setPokemonOptions] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [hasError, setErrors] = useState(false);

    const fetchPokemonData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${pokedex}`);
        response
          .json()
          .then(response => setPokemonOptions(response.pokemon_entries))
          .catch(err => setErrors(err))
    }
    fetchPokemonData();

    const back = () => {
        setPokemonSelected(null);
    }

    const selectDirection = () => {
        if (pokemonSelected === null) {
            return (
            <div>
                <button onClick={() => backToPokedexSelect()}>Back</button>
                <PokemonList pokemonOptions={pokemonOptions} setPokemonSelected={setPokemonSelected} />
            </div>
            )
        } else {
            return (
                <PokemonInfoMain pokemon={pokemonSelected} back={back}/>
            )
        }
    }

    return (
        selectDirection()
    )
}

export default PokemonSelector;