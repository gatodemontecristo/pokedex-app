import { CardPokemon, ModalFilter } from "../components";

import "../styles/PokeSearchPage.css";
import "../styles/Spinner.css";
import { useFilterModal, useFilterRegion } from "../hooks";

export const PokeSearchPage = () => {
  // const { pokemones, isLoading } = useFetchPokemons(1);

  const {
    poketypes,
    poketypeslist,
    show,
    handleShow,
    handleClose,
    onChangePokeType,
    onSaveChangesTypes,
  } = useFilterModal();
  const {
    region,
    pokedex,
    isLoading,
    search,
    onChangeSearch,
    onChangeRegion,
    onChangeOrder,
  } = useFilterRegion();

  const filtersTypes = poketypes.filter((type) => type.selected);
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
            disabled={isLoading}
          />
        </div>
        <div className="search__container__region">
          <div
            className={`search__container__region__card ${
              region == 1 ? "seleccionado " : ""
            } ${isLoading ? " disableClass" : ""}`}
          >
            <a
              onClick={(e) => {
                onChangeRegion(1, e);
              }}
              href=""
            >
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
            </a>
          </div>

          <div
            className={`search__container__region__card ${
              region == 2 ? "seleccionado " : ""
            } ${isLoading ? "disableClass" : ""}`}
          >
            <a
              onClick={(e) => {
                onChangeRegion(2, e);
              }}
              href=""
            >
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
            </a>
          </div>

          <div
            className={`search__container__region__card ${
              region == 3 ? "seleccionado " : ""
            } ${isLoading ? " disableClass" : ""}`}
          >
            <a
              onClick={(e) => {
                onChangeRegion(3, e);
              }}
              href=""
            >
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
            </a>
          </div>
        </div>

        <div className="search__container__filter">
          <div className="search__container__filter__orden">
            <p>Orden</p>
            <div
              className={`btn-group ${isLoading ? " disableClass" : ""}`}
              role="group"
              aria-label="Basic radio toggle button group"
              onClick={(e) => {
                onChangeOrder(e);
              }}
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn btn-outline-warning" htmlFor="btnradio1">
                Indice <i className="bi bi-123"></i>
              </label>
              <input
                type="radio"
                className="btn-check "
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
              />
              <label className="btn btn-outline-warning" htmlFor="btnradio2">
                Nombre <i className="bi bi-alphabet"></i>
              </label>
            </div>
          </div>

          <button
            className={`btn btn-warning position-relative ${
              isLoading ? " disableClass" : ""
            }`}
            onClick={handleShow}
          >
            <i className="bi bi-filter-square-fill"></i>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {filtersTypes.length}
            </span>
          </button>
        </div>

        <ModalFilter
          poketypeslist={poketypeslist}
          handleClose={handleClose}
          show={show}
          onChangePokeType={onChangePokeType}
          onSaveChangesTypes={onSaveChangesTypes}
        ></ModalFilter>

        {isLoading ? (
          <div className="spinner__container">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="search__container__pokemons">
            {pokedex
              .filter((pokemon) => {
                if (!!pokemon) {
                  return (
                    pokemon.name.includes(search) &&
                    filtersTypes.every((element) =>
                      pokemon.types.some(
                        ({ type }) => type.name === element.name
                      )
                    )
                  );
                } else {
                  return false;
                }
              })
              .map((pokemon, index) => {
                return <CardPokemon key={index} {...pokemon}></CardPokemon>;
              })}
          </div>
        )}
      </div>
    </div>
  );
};
