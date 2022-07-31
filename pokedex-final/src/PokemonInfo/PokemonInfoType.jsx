import React from 'react'
const PokemonInfoType = ({pokemonDetails}) => {

    return (
        <div>
            {pokemonDetails !== null ?
                pokemonDetails.types.map(type =>
                    <h3>{type.type.name}</h3>) :
                null
            }
        </div>
    )
}

export default PokemonInfoType