import "../styles/TagPokemons.css";

export const TagPokemon = (types) => {
  return (
    <div className="search__container__pokemons__card__text--types--tag">
      <div className="search__container__pokemons__card__text--types--tag--p">
        <h4>Type</h4>
        <p>{types.type.name}</p>
      </div>
      <img src={`/icons/${types.type.name}.svg`} alt="" />
    </div>
  );
};
