import '../styles/CardPokemons.css'
import { pokeTypes } from '../types/pokeTypes';
import { TagPokemon } from './TagPokemon';
export const CardPokemon = (pokemon) => {

  const cardColor = (firstType)=>{
    return pokeTypes[firstType];
  }

  return (
    <div className="search__container__pokemons__card" style={{backgroundColor:`${cardColor(pokemon.types[0].type.name)}`}}>
      <div className="search__container__pokemons__card__img">
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      </div>
      <div className="search__container__pokemons__card__text">
        <h2>#{pokemon.id}</h2>
        <h3>{pokemon.name}</h3>
        <div className="search__container__pokemons__card__text--types">
          {pokemon.types.map((type, index)=>{
            return <TagPokemon key={index} {...type}></TagPokemon>
          })}
        </div>
      </div>
    </div>
  );
};
