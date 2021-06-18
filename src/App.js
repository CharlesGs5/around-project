import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";
import Cart from "./components/cart";
import Pagination from "./components/pagination";
import {CartProvider} from "./components/cartContext";
import {getPokemon, getPokemonData} from "./utils/apiCalls";

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [cartItems, setCarItems] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const onAdd = (pokemons) => {
    const exist = cartItems.find(x => x.name === pokemons.name);
    if(exist) {
      setCarItems(cartItems.map(x => x.name === pokemons.name ? {...exist, qty: exist.qty + 1} : x));
    } else {
      setCarItems([...cartItems, {...pokemons, qty: 1}]);
    }
  }

  const fetchPokemons = async () => {
    try {
      const data = await getPokemon(25, 25 * page);
      const promises = data.results.map(async pokemon => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setTotal(Math.ceil(data.count / 25));
    } catch (e) {
      console.warn(`There was an error! ${e}`)
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div className="App">
      <CartProvider>
        <Navbar/>
        <Cart onAdd={onAdd} cartItems={cartItems}/>
        <Pokedex pokemons={pokemons}
                 page={page}
                 setPage={setPage}
                 total={total}/>
      </CartProvider>
    </div>
  );
}

export default App;
