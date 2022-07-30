import React, { useEffect, useState } from 'react'
import PokemonInfoMain from './PokemonInfo/PokemonInfoMain.jsx';
import PokemonList from './PokemonList.jsx';
const PokemonSelector = ({setErrors, P, pokedexSelected, backToPokedexSelect }) => {

    const [pokemonOptions, setPokemonOptions] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(null);

    const fetchPokemonData = async () => {
        try {
            const response = (await P.getPokedexByName(pokedexSelected)).pokemon_entries;
            setPokemonOptions(response)
        } catch (e) {
            setErrors("Error, list of pokemon : " + e.message);
        }
    };
    
    useEffect(() => {
        fetchPokemonData();
    }, [P, setErrors])

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
                <PokemonInfoMain P={P} setErrors={setErrors} pokemonSelected={pokemonSelected} back={back} />
            )
        }
    }

    return (
        selectDirection()
    )
}

export default PokemonSelector;