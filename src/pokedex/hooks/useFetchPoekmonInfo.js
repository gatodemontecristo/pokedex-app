import { useEffect, useState } from "react";
import { getPokemonInfo } from "../helpers";


export const useFetchPoekmonInfo = (poke_id) => {
    const [pokeInfo, setpokeInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getDetails = async () => {
        const newPokeInfo = await getPokemonInfo(poke_id);
        setpokeInfo(newPokeInfo);
        setIsLoading(false);
      };

      useEffect(() => {
        getDetails();
      }, []);

      return {
        pokeInfo,
        isLoading
      }

}