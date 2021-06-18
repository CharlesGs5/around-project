import React, {useContext} from "react";
import {CartContext} from "./cartContext";
import { Button } from "@material-ui/core";
import styles from './../modules/pokemon-card.module.css'

const Pokemon = (props) => {
    const { pokemon } = props;
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const pkm = {name: pokemon.name, price: pokemon.height};
        setCart(curr => [...curr, pkm.price]);
    }

    return(
      <div className={styles.pokemonCard}>
          <div className={styles.pokemonImg}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
          </div>
          <div className={styles.idTop}>
              <h3 className={styles.pokemonName}>{pokemon.name}</h3>
          </div>
          <div># {pokemon.id}</div>
          <div className={styles.pricePkm}>
              <div className={styles.addBtn}>Price ${pokemon.height}</div>
              <div className={styles.addBtn}>
                  <Button color="primary" variant="contained" size="small" onClick={addToCart}>Add to cart</Button>
              </div>
          </div>
      </div>
    );
}

export default Pokemon;