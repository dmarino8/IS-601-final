const PokemonInfoAbilities = ({pokemon}) => {

    return (
        <div>
            {pokemon !== null ?
                pokemon.abilities.map(ability =>
                    <h3>{ability.ability.name}</h3>) :
                null
            }
        </div>
    )
}

export default PokemonInfoAbilities