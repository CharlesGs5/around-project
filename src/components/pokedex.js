import React from "react";
import Pokemon from "./pokemon";
import Pagination from "./pagination";
import styles from './../modules/pokemon-card.module.css'

const Pokedex = (props) => {
    const { pokemons, page, setPage, total, loading } = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    };

    return (
        <div>
            <div className={styles.header}>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            <div className={styles.gridPkm}>
                {pokemons.map((pokemon, index) => {
                    return(<Pokemon pokemon={pokemon} key={pokemon.name}/>)
                })}
            </div>
        </div>
    );
}

export default Pokedex;