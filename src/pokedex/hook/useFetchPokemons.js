import { useEffect, useState } from 'react';
import { getPokemons } from '../helpers/getPokemons';

export const useFetchPokemons = () => {
    const [pokemones, setpokemones] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getPokedex = async () => {
        const pokeArreglo = await getPokemons();
        setpokemones(pokeArreglo);
        setIsLoading(false);
      };

      useEffect(() => {
        getPokedex();
      }, []);

  return  {pokemones,isLoading}
  
}
