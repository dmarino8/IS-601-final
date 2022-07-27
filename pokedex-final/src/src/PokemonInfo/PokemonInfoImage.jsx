const PokemonInfoImage = ({pokemon}) => {

    return (
        <div>
            {pokemon !== null ?
                <img src={pokemon.sprites.front_default}/> :
                null
            }
        </div>
    )
}

export default PokemonInfoImage