import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    // 1- get the data from the api
    axios
      .get("https://api.pokemontcg.io/v2/cards?pageSize=10")
      .then((response) => setPokemon(response.data.data));
  }, []);

  return (
    <div className="uu">
      {pokemon ? (
        <ul>
          {pokemon.map((poke, i) => (
            <div key={i}>
              <li>{poke.name}</li>
              <img
                src={poke.images.large}
                style={{ height: "100px", width: "100px" }}
              />
            </div>
          ))}
        </ul>
      ) : (
        <h1>Loading... </h1>
      )}
    </div>
  );
};

export default Pokemon;
