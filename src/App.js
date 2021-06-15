import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";
import {getPokemon, getPokemonData} from "./utils/apiCalls";

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemon();
      const promises = data.results.map(async pokemon => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (e) {
      console.warn(`There was an error! ${e}`)
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
