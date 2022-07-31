import React from 'react'

const PokemonInfoImage = ({pokemonDetails}) => {

    return (
        <div>
            {pokemonDetails !== null ?
                <img src={pokemonDetails.sprites.front_default}/> :
                null
            }
        </div>
    )
}

export default PokemonInfoImage