import { useDispatch, useSelector } from "react-redux";
import { loadPokedex, sortAlphabetically, sortByNumber } from "../../store";
import {  useEffect, useState } from "react";
export const useFilterRegion = () => {

    const { pokedex, isLoading } = useSelector((state) => state.poke);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const lastRegion = localStorage.getItem('lastRegion') || 1;
    const [region, setRegion] = useState(lastRegion);
    
  
    const onChangeSearch = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    // useEffect(() => {
    //   dispatch(loadPokedex(region));
    // }, [region]);
    const lastOrder = localStorage.getItem('lastOrder2') || "true";
    const [order, setorder] = useState(JSON.parse(lastOrder) === true);

    useEffect(() => {
      dispatch(loadPokedex(region,order));
    }, [region]);
  
    const onChangeRegion = (numberRegion, event) => {
      event.preventDefault();
      setRegion(numberRegion);
      localStorage.setItem('lastRegion',numberRegion);
    };
    

  const onChangeOrder = () =>{
    if(order){
     
      dispatch(sortAlphabetically());
    }else{
      dispatch(sortByNumber());
     
    }
    setorder(!order);
    localStorage.setItem('lastOrder2',!order);
  }
    return{
      region,
        pokedex,
        isLoading,
        search,
        onChangeSearch,
        onChangeRegion,
        onChangeOrder,
        order
    }
}