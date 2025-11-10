

export const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>

      <div className="grid-three-cols">
        <div>
        <span className="ye"> Height:</span>
        <br/>
        <p className="pokemon-info">
           {pokemonData.height}
        </p>
        </div>
        <div>
          <span> Weight:</span> 
        <p className="pokemon-info"> {pokemonData.weight}
        </p>
        </div>
        <div>
          <span> speed:</span> 
        <p className="pokemon-info">{pokemonData.stats[5].base_stat}
        </p>
        </div>
      </div>

      <div className="grid-three-cols">
        <div >
          <span style={{padding:"0px 10px 10px "}}>Experience: </span>
          <p className="yo" >{pokemonData.base_experience}</p>
       
        </div>
        
        <div className="pokemon-info">
          <span>Attack:</span>
          <p>{pokemonData.stats[1].base_stat}</p>
        </div>
        <div className="pokemon-info">
            <span> Abilities: </span>
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
        </div>
      </div>
    </li>
  );
};