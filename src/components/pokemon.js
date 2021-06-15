import React from "react";

const Pokemon = (props) => {
    const { pokemon } = props;

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

      </div>
    );
}

export default Pokemon;