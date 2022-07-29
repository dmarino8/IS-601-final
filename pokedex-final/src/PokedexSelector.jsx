import React, { useEffect, useState } from 'react'
import './PokedexSelector.css';

const PokedexSelector = ({setErrors, P, setPokedexSelected}) => {

    const [pokedexOptions, setPokedexOptions] = useState([]);

    const fetchPokedexData = async () => {
        try {
            const response = (await P.getPokedexsList()).results;
            setPokedexOptions(response);
        } catch (e) {
            setErrors("Error, list of pokedex : " + e.message);
        }
    };

    useEffect(() => {
        fetchPokedexData();
    }, [P, setErrors]);
    

    return (
        pokedexOptions.map(pokedex =>
        <tr>
            <td>{pokedex.name}</td>
            <button onClick={() => setPokedexSelected(pokedex.name)}>view</button>
        </tr>
        )
    )
}

export default PokedexSelector