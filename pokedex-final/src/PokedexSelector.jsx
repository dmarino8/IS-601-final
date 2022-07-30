import React, { useEffect, useState } from 'react'
import './PokedexSelector.css';

const PokedexSelector = ({ setErrors, P, setPokedexSelected }) => {

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

    function changeBackgroundTrue(e) {
        e.target.style.background = '#c7a008';
    }
    function changeBackgroundFalse(e) {
        e.target.style.background = '#ffcb05';
    }

    const getMapped = (input) => {
        return (
            input.map(pokedex =>
                <div className='grid-item' onClick={() => setPokedexSelected(pokedex.name)} onMouseOver={changeBackgroundTrue} onMouseLeave={changeBackgroundFalse}>
                    {pokedex.name}
                </div>
            )
        )
    }

    return (
        <div className='grid-container'>
            {getMapped(pokedexOptions)}
        </div>
    )
}

export default PokedexSelector