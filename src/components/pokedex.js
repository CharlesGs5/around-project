import React from "react";
import Pokemon from "./pokemon";

const Pokedex = (props) => {
    const { pokemons } = props;

    return (
        <div>
            {pokemons.map((pokemon, index) => {
                return(<Pokemon pokemon={pokemon} key={pokemon.name}/>)
            })}
        </div>
    );
}

export default Pokedex;