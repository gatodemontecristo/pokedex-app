import { useFetchPokemons } from '../hook';
import '../styles/PokeSearchPage.css'

export const PokeSearchPage = () => {

  const { pokemones, isLoading } = useFetchPokemons();
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
    </div>
    </div>
  );
};
