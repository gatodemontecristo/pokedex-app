
export const getPokemons = async() => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=10`;
    try {
       
      let pokeArreglo=[];
        /* First API fetch call to return names and URL's of first 384 Pokemon after promise is resolved.*/
        const valor = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
          .then(response => response.json())
          .then(data => {
            let results = data.results;
            let promisesArray = results.map(result => {
              return fetch(result.url).then(response => response.json());
            })
            return Promise.all(promisesArray)
          }).then(data2=> pokeArreglo=data2);
          console.log(valor);
 
    //    return pokemonArray;
        return pokeArreglo;
     } catch (err) {
       console.log(err);
       return [];
     }

 
}
