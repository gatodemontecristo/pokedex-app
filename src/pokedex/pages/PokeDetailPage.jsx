import { useNavigate, useParams } from "react-router-dom";
import { useFetchPoekmonInfo } from "../hooks";
import "../styles/PokeDetailPage.css";
import { TagPokemonvs2 } from "../components";
import { pokeTypes } from "../types/pokeTypes";
export const PokeDetailPage = () => {
  const { pokeId } = useParams();
  console.log(pokeId);
  const { pokeInfo, isLoading } = useFetchPoekmonInfo(pokeId);
  const formatNumber = (number) => {
    if (number >= 10) {
      return "0" + number;
    } else if (number >= 1) {
      return "00" + number;
    } else {
      return number;
    }
  };
  const cardColor = (firstType) => {
    return pokeTypes[firstType];
  };
  const formatHW = (value) => {
    return value / 10;
  };
  const navigate = useNavigate();

  const onNavigateSearch = () => {
    navigate("/search", {
      replace: true,
    });
  };

  return (
    <>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="pokeContent">
          <div
            className="pokeInfo"
            style={{
              backgroundColor: `${cardColor(pokeInfo[0].types[0].type.name)}`,
            }}
          >
            <div className="pokeInfo__primary">
              <div className="pokeInfo__primary__header">
                <button
                  className="pokeInfo__primary__header--back btn btn-secondary"
                  onClick={onNavigateSearch}
                >
                  <i className="bi bi-skip-backward-circle-fill"></i>
                </button>

                <button className="pokeInfo__primary__header--favorite btn btn-secondary">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
              <div className="pokeInfo__primary__nav">
                <div className="pokeInfo__primary__nav__info">
                  <h2 className="pokeInfo__primary__nav__info--name">
                    {pokeInfo[0].name}
                  </h2>
                  <div className="pokeInfo__primary__nav__info__types">
                    {pokeInfo[0].types.map((type, index) => {
                      return (
                        <TagPokemonvs2 key={index} {...type}></TagPokemonvs2>
                      );
                    })}
                  </div>
                </div>
                <p className="pokeInfo__primary__nav__number">
                  #{formatNumber(pokeInfo[0].order)}
                </p>
              </div>

              <div className="pokeInfo__primary--img">
                <img
                  className="pokeInfo__primary--img--hiden"
                  src={
                    pokeInfo[0].sprites.other["official-artwork"].front_default
                  }
                  alt={pokeInfo[0].name}
                />
                <img
                  className="pokeInfo__primary--img--real"
                  src={
                    pokeInfo[0].sprites.other["official-artwork"].front_default
                  }
                  alt={pokeInfo[0].name}
                />
              </div>

              <img
                className="pokeInfo__primary__aqua--pokeball"
                src="../pokeball.png"
                alt=""
              />
              <img
                className="pokeInfo__primary__aqua--type"
                src={`/icons/${pokeInfo[0].types[0].type.name}.svg`}
                alt=""
              />
            </div>
            <div className="pokeInfo__secondary">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
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
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
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
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
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
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
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
              <div className="tab-content" id="myTabContent">
                <div
                  className="pokeInfo__secondary__tab tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex="0"
                >
                  <div className="pokeInfo__secondary__tab__form">
                    <div className="pokeInfo__secondary__tab__form__line">
                      <h3>Catch rate</h3>
                      <p>{pokeInfo[1].capture_rate}</p>
                    </div>
                    <div className="pokeInfo__secondary__tab__form__line">
                      <h3>Base happiness</h3>
                      <p>{pokeInfo[1].base_happiness}</p>
                    </div>
                    <div className="pokeInfo__secondary__tab__form__line">
                      <h3>Height</h3>
                      <p>{formatHW(pokeInfo[0].height)} cm</p>
                    </div>
                    <div className="pokeInfo__secondary__tab__form__line">
                      <h3>Weight</h3>
                      <p>{formatHW(pokeInfo[0].weight)} kg</p>
                    </div>
                    <div className="pokeInfo__secondary__tab__form__line">
                      <h3>Abilities</h3>
                      <p>
                        {pokeInfo[0].abilities.map((abilitie) => {
                          return abilitie.ability.name + ", ";
                        })}
                      </p>
                    </div>
                    <h3 className="pokeInfo__secondary__tab__form_subtitle">
                      Crianza
                    </h3>
                    {pokeInfo[1].egg_groups.length >= 1 ? (
                      <div className="pokeInfo__secondary__tab__form__line">
                        <h3>Egg Groups</h3>
                        <p>{pokeInfo[1].egg_groups[0].name}</p>
                      </div>
                    ) : (
                      <p></p>
                    )}
                    {pokeInfo[1].egg_groups.length >= 2 ? (
                      <div className="pokeInfo__secondary__tab__form__line">
                        <h3>Egg Cycle</h3>
                        <p>{pokeInfo[1].egg_groups[1].name}</p>
                      </div>
                    ) : (
                      <p></p>
                    )}
                    {/* <div className="pokeInfo__secondary__tab__form__line">
                      <h3>Egg Cycle</h3>
                      <p>{pokeInfo[1].egg_groups[1].name}</p>
                    </div> */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex="0"
                >
                  <div
                    className="pokeInfo__secondary__tab tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                  >
                    <div className="pokeInfo__secondary__tab__form__progress">
                      <h3>HP</h3>
                      <p>{pokeInfo[0].stats[0].base_stat}</p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={pokeInfo[0].stats[0].base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{
                            width: `${pokeInfo[0].stats[0].base_stat}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="pokeInfo__secondary__tab__form__progress">
                      <h3>Attack</h3>
                      <p>{pokeInfo[0].stats[1].base_stat}</p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={pokeInfo[0].stats[1].base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar bg-danger"
                          style={{
                            width: `${pokeInfo[0].stats[1].base_stat}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="pokeInfo__secondary__tab__form__progress">
                      <h3>Defense</h3>
                      <p>{pokeInfo[0].stats[2].base_stat}</p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={pokeInfo[0].stats[2].base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar"
                          style={{
                            width: `${pokeInfo[0].stats[2].base_stat}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="pokeInfo__secondary__tab__form__progress">
                      <h3>Sp. Atk</h3>
                      <p>{pokeInfo[0].stats[3].base_stat}</p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={pokeInfo[0].stats[3].base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar bg-danger"
                          style={{
                            width: `${pokeInfo[0].stats[3].base_stat}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="pokeInfo__secondary__tab__form__progress">
                      <h3>Sp. Def</h3>
                      <p>{pokeInfo[0].stats[4].base_stat}</p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={pokeInfo[0].stats[4].base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar"
                          style={{
                            width: `${pokeInfo[0].stats[4].base_stat}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="pokeInfo__secondary__tab__form__progress">
                      <h3>Speed</h3>
                      <p>{pokeInfo[0].stats[5].base_stat}</p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={pokeInfo[0].stats[5].base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar bg-warning"
                          style={{
                            width: `${pokeInfo[0].stats[5].base_stat}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <h3 className="pokeInfo__secondary__tab__form_subtitle">
                      Tipos de defensa
                    </h3>
                    <p className="pokeInfo__secondary__tab__form__progress_defText">
                      {pokeInfo[1].flavor_text_entries[0].flavor_text}
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabIndex="0"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="disabled-tab-pane"
                  role="tabpanel"
                  aria-labelledby="disabled-tab"
                  tabIndex="0"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
