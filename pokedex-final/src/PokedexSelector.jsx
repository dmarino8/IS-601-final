import React, { useState } from 'react'
import './PokedexSelector.css';

const PokedexSelector = ({pokedexs, setPokedexSelected}) => {
   console.log(pokedexs); 
    return (
        pokedexs.map(pokedex =>
        <tr>
            <td>{pokedex.name}</td>
            <button onClick={() => setPokedexSelected(pokedex.name)}>view</button>
        </tr>
        )
    )
}

export default PokedexSelector