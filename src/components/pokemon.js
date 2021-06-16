import React, {useContext} from "react";
import {CartContext} from "./cartContext";

const Pokemon = (props) => {
    const { pokemon } = props;
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const pkm = {name: pokemon.name, price: pokemon.height};
        setCart(curr => [...curr, pkm.price]);
    }

    return(
      <div>
          <div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
          </div>
          <div>
              <h3>{pokemon.name}</h3>
              <div>#{pokemon.id}</div>
          </div>

          <div>{pokemon.types.map((type, index) => {
              return <div key={index}>{type.name}</div>
          })}
          </div>
          <div>
              <button onClick={addToCart}>Add to cart</button>
          </div>

      </div>
    );
}

export default Pokemon;