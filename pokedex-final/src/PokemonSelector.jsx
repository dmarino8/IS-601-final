import React, { useEffect, useState } from 'react'
import PokemonInfoMain from './PokemonInfo/PokemonInfoMain.jsx';
import PokemonList from './PokemonList.jsx';
import './PokemonSelector.css';

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

    function changeBackgroundTrue(e) {
        e.target.style.background = '#c7a008';
    }
    function changeBackgroundFalse(e) {
        e.target.style.background = '#ffcb05';
    }

    const selectDirection = () => {
        if (pokemonSelected === null) {
            return (
                
                <div className='grid-container'>
                    <button onClick={() => backToPokedexSelect()} className='grid-item' onMouseOver={changeBackgroundTrue} onMouseLeave={changeBackgroundFalse}>Back</button>
                    <PokemonList pokemonOptions={pokemonOptions} setPokemonSelected={setPokemonSelected} P={P} setErrors={setErrors} />
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