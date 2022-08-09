import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonId, setPokemonId] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChangeInput = (ev) => {
    setPokemonId(ev.target.value);
  }

  const fetchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(({data}) => setPokemon(data))
    .catch(resp => console.log(resp))
  }
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(({data}) => setPokemons(data.results))
    .catch(resp => console.log(resp))
  }, []);

  return (
    <>
      <div style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center'
      }}>
        <input value={pokemonId} onChange={onChangeInput} placeholder={`código`}/>
        <button onClick={fetchPokemon}>Fetch Pokemon</button> 
        <ul>
          {pokemons.map(pokemon => (
            <li key={pokemon.url} style={{border: '1px solid black'}}><p>{pokemon.name}</p><p>{pokemon.url}</p></li>
          ))}
        </ul>
      </div>
      <h1>{JSON.stringify(pokemon?.name)}</h1>
    </>
  );


}

export default App;
