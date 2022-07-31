import React from 'react'


const PokemonInfoAbilities = ({pokemonDetails}) => {

    return (
        <div>
            {pokemonDetails !== null ?
                pokemonDetails.abilities.map(ability =>
                    <h3>{ability.ability.name}</h3>) :
                null
            }
        </div>
    )
}

export default PokemonInfoAbilities