import { useState, useEffect } from 'react';
import '../styles/card.css'

function Card({ id, onClick}) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            setPokemonData(data);
    })
    .catch(error => console.error('Error fetching Pokemon data:', error));
}, [id]);


    return(
        <button className={`card card-${id}`} onClick={onClick}>
            {pokemonData ? (
                <>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    <p>{pokemonData.name}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </button>
    )
}

export default Card