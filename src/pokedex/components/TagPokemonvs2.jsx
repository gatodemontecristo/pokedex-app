
import "../styles/TagPokemonvs2.css";

export const TagPokemonvs2 = ({name}) => {
  return (
    <div className="pokeInfo__secondary__tab__text--types--tag">
    <div className="pokeInfo__secondary__tab__text--types--tag--p">
      <p>{name}</p>
    </div>
    <img src={`/icons/${name}.svg`} alt="" />
  </div>
  )
}
