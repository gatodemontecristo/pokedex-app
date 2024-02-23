import '../styles/CardPokemons.css'
import { TagPokemon } from './TagPokemon';
import { useFormatCard } from '../hooks';
export const CardPokemon = (pokemon) => {


const { cardColor, formatNumber, onNavigatePokeDetail } =  useFormatCard(pokemon.id);
  return (
    <a href="" onClick={onNavigatePokeDetail} className="search__container__pokemons__card--a">
    <div   className="search__container__pokemons__card animate__animated animate__bounceInUp" style={{backgroundColor:`${cardColor(pokemon.types[0].type.name)}`}}>
      <div className="search__container__pokemons__card__img">
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      </div>
      <div className="search__container__pokemons__card__text">
        <h2>#{formatNumber(pokemon.id)}</h2>
        <h3>{pokemon.name}</h3>
        <div className="search__container__pokemons__card__text--types">
          {pokemon.types.map((type, index)=>{
            return <TagPokemon key={index} {...type}></TagPokemon>
          })}
        </div>
      </div>
    </div>
    </a>
  );
};
