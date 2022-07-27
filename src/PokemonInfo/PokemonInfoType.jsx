const PokemonInfoType = ({pokemon}) => {

    return (
        <div>
            {pokemon !== null ?
                pokemon.types.map(type =>
                    <h3>{type.type.name}</h3>) :
                null
            }
        </div>
    )
}

export default PokemonInfoType