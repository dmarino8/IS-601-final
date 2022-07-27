const PokemonInfoBaseStats = ({pokemon}) => {

    return (
        <div>
            {pokemon !== null ?
                pokemon.stats.map(stat =>
                    <h3>{stat.stat.name} : {stat.base_stat}</h3>) :
                null
            }
        </div>
    )
}

export default PokemonInfoBaseStats