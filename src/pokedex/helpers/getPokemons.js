
export const getPokemons = async(region) => {
    try {
       
      let pokeArreglo=[];
        /* First API fetch call to return names and URL's of first 384 Pokemon after promise is resolved.*/
        // const valor = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
        //   .then(response => response.json())
        //   .then(data => {
        //     let results = data.results;
        //     let promisesArray = results.map(result => {
        //       return fetch(result.url).then(response => response.json());
        //     })
        //     return Promise.all(promisesArray)
        //   }).then(data2=> pokeArreglo=data2);
        //   console.log(valor);

        const baseURL = 'https://pokeapi.co/api/v2/';
        const res = await fetch(`${baseURL}generation/${region}`)
        const data = await res.json();

        const promises = data.pokemon_species.map(async(pokemon)=>{
            const res = await fetch(`${baseURL}pokemon/${pokemon.name}`)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)


 
    //    return pokemonArray;
        return results;
     } catch (err) {
       console.log(err);
       return [];
     }

 
}
