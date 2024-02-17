import { useEffect, useState } from 'react';
import { getPokemons } from '../helpers/getPokemons';

export const useFetchPokemons = (region=1) => {
    const [pokemones, setpokemones] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getPokedex = async () => {
        const pokeArreglo = await getPokemons(region);
        setpokemones(pokeArreglo);
        setIsLoading(false);
      };

      useEffect(() => {
        getPokedex();
      }, []);

  return  {pokemones,isLoading}
  
}
