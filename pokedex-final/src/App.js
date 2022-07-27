import './App.css';
import React, {useState, useEffect} from 'react';
import PokedexSelector from './PokedexSelector';
import PokemonSelector from './PokemonSelector';

const App = () => {

    const [hasError, setErrors] = useState(false);
    const [pokedexOptions, setPokedexOptions] = useState([]);
    const [pokedexSelected, setPokedexSelected] = useState(null);
    

    const fetchPokedexData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokedex");
        response
          .json()
          .then(response => setPokedexOptions(response.results))
          .catch(err => setErrors(err))
    };
    

    useEffect(() => {
        fetchPokedexData();
      }, []);

      const backToPokedexSelect = () => {
          setPokedexSelected(null)
      }

    return (
        <div>
            <h1>{pokedexSelected}</h1>
            {pokedexSelected === null ?
            <PokedexSelector pokedexs={pokedexOptions} setPokedexSelected={setPokedexSelected}/> 
            : <PokemonSelector pokedex={pokedexSelected} backToPokedexSelect={backToPokedexSelect}/>}
        </div>
    );
}

export default App;
