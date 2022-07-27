import './App.css';
import React, {useState, useEffect} from 'react';
import PokedexSelector from './PokedexSelector';

const App = () => {

    const [hasError, setErrors] = useState(false);
    const [pokedexOptions, setPokedexOptions] = useState([]);
    const [pokedexSelected, setPokedexSelected] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokedex");
        response
          .json()
          .then(response => setPokedexOptions(response.results))
          .catch(err => setErrors(err))
    };

    useEffect(() => {
        fetchData();
      }, []);
    
    return (
        <div>
            <PokedexSelector pokedexs={pokedexOptions} setPokedexSelected={setPokedexSelected}/>
        </div>
    );
}

export default App;
