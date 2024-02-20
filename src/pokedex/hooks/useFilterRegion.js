import { useDispatch, useSelector } from "react-redux";
import { loadPokedex, sortAlphabetically, sortByNumber } from "../../store";
import { useEffect, useState } from "react";
export const useFilterRegion = () => {

    const { pokedex, isLoading } = useSelector((state) => state.poke);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState(1);
    
  
    const onChangeSearch = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    useEffect(() => {
      dispatch(loadPokedex(region));
    }, [region]);
  
    const onChangeRegion = (numberRegion, event) => {
      event.preventDefault();
      setRegion(numberRegion);
    };
  
    const onChangeOrder = (event) => {
      if (event.target.id == "btnradio1") {
        dispatch(sortByNumber());
      } else {
        dispatch(sortAlphabetically());
      }
    };
    return{
      region,
        pokedex,
        isLoading,
        search,
        onChangeSearch,
        onChangeRegion,
        onChangeOrder
    }
}