
const PokemonList = ({pokemonOptions, setPokemonSelected}) => {

    return (
        pokemonOptions.map(pokemon =>
            <tr>
                <td>{pokemon.pokemon_species.name}</td>
                <button onClick={() => setPokemonSelected(pokemon.pokemon_species.name)}>View Details</button>
            </tr>
        )
    )
}

export default PokemonList