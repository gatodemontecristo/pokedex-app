export const getPokemons = async (region) => {
  try {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}generation/${region}`);
    const data = await res.json();

    const promises = data.pokemon_species.map(async (pokemon) => {
      if(pokemon.name!== "deoxys"){
      const res = await fetch(`${baseURL}pokemon/${pokemon.name}`);
   
      const data = await res.json();
      return data;
      }
    });
    const results = await Promise.all(promises);
    //    return pokemonArray;
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
};
