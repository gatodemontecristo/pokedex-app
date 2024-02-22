export const getPokemonInfo = async (pokeId) => {
    try {

      const baseURL = "https://pokeapi.co/api/v2/";
      const promesa1 = await fetch(`${baseURL}pokemon/${pokeId}`).then(response =>  response.json());
      const promesa2 = await fetch(`${baseURL}pokemon-species/${pokeId}`).then(response =>  response.json());
      const promesa3 = await fetch(`${baseURL}pokemon/${pokeId}/encounters`).then(response => response.json());

      const results = await Promise.all([promesa1,promesa2,promesa3]);
      console.log(results);
      return results;
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  