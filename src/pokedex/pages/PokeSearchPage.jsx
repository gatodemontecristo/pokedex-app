import { CardPokemon } from '../components';
import { useFetchPokemons } from '../hook';
import '../styles/PokeSearchPage.css'

export const PokeSearchPage = () => {

  const { pokemones, isLoading } = useFetchPokemons(1);
  console.log(pokemones);
  return (
    <div className="search">
    <div className="search__container">
      <div className="search__container__title">
        <h3 className="search__container__title--text">Buscar en la pokedex</h3>
        <img className="search__container__title--img" src="../pikachu.png" alt="" />
      </div>

      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          <i class="bi bi-search"></i>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Vaporeon :)"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div className='search__container__region'>
        <div className='search__container__region__card'>
            <div className='search__container__region__card--img'>
                <img src="/region/kanto.png" alt="" />
            </div>
            <div className='search__container__region__card--title'>
                <h2 className='search__container__region__card--title--pri'>Kantō</h2>
                <h3 className='search__container__region__card--title--sec'>カントー</h3>
                <p className='search__container__region__card--title--foot'>Rojo y Azul</p>
            </div>
        </div>
        <div className='search__container__region__card'>
            <div className='search__container__region__card--img'>
                <img src="/region/johto.png" alt="" />
            </div>
            <div className='search__container__region__card--title'>
                <h2 className='search__container__region__card--title--pri'>Johto</h2>
                <h3 className='search__container__region__card--title--sec'>ジョウト</h3>
                <p className='search__container__region__card--title--foot'>Oro y Plata</p>
            </div>
        </div>
        <div className='search__container__region__card'>
            <div className='search__container__region__card--img'>
                <img src="/region/hoenn.png" alt="" />
            </div>
            <div className='search__container__region__card--title'>
                <h2 className='search__container__region__card--title--pri'>Hoenn</h2>
                <h3 className='search__container__region__card--title--sec'>ホウエン</h3>
                <p className='search__container__region__card--title--foot'>Rubí y Zafiro</p>
            </div>
        </div>
        
      </div>
      <div className='search__container__pokemons'>
        {pokemones.map((pokemon,index)=>{
            return <CardPokemon key={index} {...pokemon}></CardPokemon>
        })}
        
      </div>
    </div>
    </div>
  );
};
