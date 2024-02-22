import { useNavigate } from 'react-router-dom';
import '../styles/CardPokemons.css'
import { pokeTypes } from '../types/pokeTypes';
import { TagPokemon } from './TagPokemon';
export const CardPokemon = (pokemon) => {

  const cardColor = (firstType)=>{
    return pokeTypes[firstType];
  }
  const formatNumber = (number) =>{
    if(number>=10){
      return "0"+number
    }else if(number>=1){
      return "00"+number
    }else{
      return number
    }
}
const navigate = useNavigate();
const onNavigatePokeDetail = () => {
  navigate(`/detail/${pokemon.id}`, {
    replace: true,
  });
};
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
