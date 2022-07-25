import React, { useState } from 'react'


const PokedexSelector = ({pokedexs}) => {
   console.log(pokedexs); 
    return (
        pokedexs.map(pokedex => <button>{pokedex.name}</button>)
    )
}

export default PokedexSelector