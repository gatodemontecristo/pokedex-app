import { getPokemons } from "./helpers/getPokemons";
import { addCollectionPokemons, loadPokemon, sortAlphabetically, sortByNumber } from "./pokeSlice";

export const loadPokedex = (region=1,order=true)=>{
    return async(dispatch) =>{
        dispatch( loadPokemon());
        const result = await getPokemons(region);
        await dispatch(addCollectionPokemons(result));
        if(order){
        dispatch(sortByNumber());
        }else{
            dispatch(sortAlphabetically());
        }
    }
}