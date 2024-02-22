
import "../styles/TagPokemonvs2.css";

export const TagPokemonvs2 = (types) => {
  return (
    <div className="pokeInfo__secondary__tab__text--types--tag">
    <div className="pokeInfo__secondary__tab__text--types--tag--p">
      <p>{types.type.name}</p>
    </div>
    <img src={`/icons/${types.type.name}.svg`} alt="" />
  </div>
  )
}
