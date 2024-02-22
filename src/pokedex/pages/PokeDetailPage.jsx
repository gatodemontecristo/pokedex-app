import { useParams } from "react-router-dom";
import { useFetchPoekmonInfo } from "../hooks";
import "../styles/PokeDetailPage.css";
import { TagPokemonvs2 } from "../components";

export const PokeDetailPage = () => {
  const { pokeId } = useParams();
  console.log(pokeId);
  const pokeInfo = useFetchPoekmonInfo(pokeId);

  return (
    <div className="pokeContent">
      <div className="pokeInfo">
        <div className="pokeInfo__primary">
          
          <div className="pokeInfo__primary__header">

                <button className="pokeInfo__primary__header--back btn btn-secondary">
                <i class="bi bi-skip-backward-circle-fill"></i>
                </button>

                <button className="pokeInfo__primary__header--favorite btn btn-secondary">
                <i class="bi bi-heart"></i>
                </button>

          </div>
          <div className="pokeInfo__primary__nav">
            <div className="pokeInfo__primary__nav__info">
              <h2 className="pokeInfo__primary__nav__info--name">Bulbasaur</h2>
              <div className="pokeInfo__primary__nav__info__types">

                <TagPokemonvs2 name="grass"></TagPokemonvs2>
                <TagPokemonvs2 name="poison"></TagPokemonvs2>
              </div>
            </div>
            <p className="pokeInfo__primary__nav__number">#001</p>
          </div>


          <div className="pokeInfo__primary--img">
            <img className="pokeInfo__primary--img--hiden" src="../bulbaprueba.png" alt="" />
            <img className="pokeInfo__primary--img--real" src="../bulbaprueba.png" alt="" />
          </div>

          <img className="pokeInfo__primary__aqua--pokeball" src="../pokeball.png" alt="" />
        </div>
        <div className="pokeInfo__secondary">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Características
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Estadísticas
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Locaciones
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="disabled-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabled-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabled-tab-pane"
                aria-selected="false"
              >
                Movimientos
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="pokeInfo__secondary__tab tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <div className="pokeInfo__secondary__tab__form">
                <div className="pokeInfo__secondary__tab__form__line">
                    <h3>Species</h3>
                    <p>Seed</p>
                </div>
                <div className="pokeInfo__secondary__tab__form__line">
                    <h3>Height</h3>
                    <p>0.70 cm</p>
                </div>
                <div className="pokeInfo__secondary__tab__form__line">
                    <h3>Weight</h3>
                    <p>6.9 kg</p>
                </div>
                <div className="pokeInfo__secondary__tab__form__line">
                    <h3>Abilities</h3>
                    <p>Overgrow, Chlorophyl</p>
                </div>
                <h3 className="pokeInfo__secondary__tab__form_subtitle">Crianza</h3>
                <div className="pokeInfo__secondary__tab__form__line">
                    <h3>Abilities</h3>
                    <p>Overgrow, Chlorophyl</p>
                </div>
                <div className="pokeInfo__secondary__tab__form__line">
                    <h3>Abilities</h3>
                    <p>Overgrow, Chlorophyl</p>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="disabled-tab-pane"
              role="tabpanel"
              aria-labelledby="disabled-tab"
              tabindex="0"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
