import { getPokemons } from "./helpers/getPokemons";
import { addCollectionPokemons, loadPokemon, sortAlphabetically, sortByNumber } from "./pokeSlice";

export const loadPokedex = (region=1)=>{
    return async(dispatch) =>{
        dispatch( loadPokemon());
        const result = await getPokemons(region);
        dispatch(addCollectionPokemons(result));
        dispatch(sortByNumber());
    }
}