import "../styles/TagAbilities.css";

export const TagAbilities = ({name,typeTag}) => {
  return (
    <div className="search__container__pokemons__card__text--ability--tag">
      <div className="search__container__pokemons__card__text--ability--tag--p">
        <p>{name}</p>
        <i className={`bi ${typeTag=='location' ? 'bi-tree-fill' : 'bi-nintendo-switch'}`}></i>
      </div>
    </div>
  )
}
