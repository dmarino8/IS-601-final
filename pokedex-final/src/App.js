import './App.css';
import React, {useState, useEffect} from 'react';
import PokedexSelector from './PokedexSelector';
import PokemonSelector from './PokemonSelector';
import { Pokedex } from 'pokeapi-js-wrapper';
const P = new Pokedex();

const App = () => {

    const [hasError, setErrors] = useState(null);
    const [pokedexSelected, setPokedexSelected] = useState(null);
    

      const backToPokedexSelect = () => {
          setPokedexSelected(null)
      }

    return (
        <div>
            {hasError !== null ? 
            <h1>There was an error</h1> : null}
            <h1>{pokedexSelected}</h1>
            {pokedexSelected === null ?
            <PokedexSelector setErrors={setErrors} P={P} setPokedexSelected={setPokedexSelected}/> 
            : <PokemonSelector setErrors={setErrors} P={P} pokedexSelected={pokedexSelected} backToPokedexSelect={backToPokedexSelect}/>}
        </div>
    );
}

export default App;
