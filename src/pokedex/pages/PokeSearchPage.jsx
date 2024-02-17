import { CardPokemon } from "../components";
import { useDispatch, useSelector } from "react-redux";
import "../styles/PokeSearchPage.css";
import "../styles/Spinner.css";
import { loadPokedex } from "../../store";
import { useEffect, useState } from "react";

export const PokeSearchPage = () => {
  // const { pokemones, isLoading } = useFetchPokemons(1);
  // console.log(pokemones);
  const { pokedex, isLoading } = useSelector((state) => state.poke);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const onChangeSearch = ({ target }) => {
    setSearch(target.value);
  };

  useEffect(() => {
    dispatch(loadPokedex(1));
  }, []);
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__container__title">
          <h3 className="search__container__title--text">
            Buscar en la pokedex
          </h3>
          <img
            className="search__container__title--img"
            src="../pikachu.png"
            alt=""
          />
        </div>

        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Vaporeon :)"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={onChangeSearch}
            value={search}
          />
        </div>
        <div className="search__container__region">
          <div className="search__container__region__card">
            <div className="search__container__region__card--img">
              <img src="/region/kanto.png" alt="" />
            </div>
            <div className="search__container__region__card--title">
              <h2 className="search__container__region__card--title--pri">
                Kantō
              </h2>
              <h3 className="search__container__region__card--title--sec">
                カントー
              </h3>
              <p className="search__container__region__card--title--foot">
                Rojo y Azul
              </p>
            </div>
          </div>
          <div className="search__container__region__card">
            <div className="search__container__region__card--img">
              <img src="/region/johto.png" alt="" />
            </div>
            <div className="search__container__region__card--title">
              <h2 className="search__container__region__card--title--pri">
                Johto
              </h2>
              <h3 className="search__container__region__card--title--sec">
                ジョウト
              </h3>
              <p className="search__container__region__card--title--foot">
                Oro y Plata
              </p>
            </div>
          </div>
          <div className="search__container__region__card">
            <div className="search__container__region__card--img">
              <img src="/region/hoenn.png" alt="" />
            </div>
            <div className="search__container__region__card--title">
              <h2 className="search__container__region__card--title--pri">
                Hoenn
              </h2>
              <h3 className="search__container__region__card--title--sec">
                ホウエン
              </h3>
              <p className="search__container__region__card--title--foot">
                Rubí y Zafiro
              </p>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="spinner__container">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="search__container__pokemons">
            {pokedex
              .filter((pokemon) => pokemon.name.includes(search))
              .map((pokemon, index) => {
                return <CardPokemon key={index} {...pokemon}></CardPokemon>;
              })}
          </div>
        )}
      </div>
    </div>
  );
};
