
import { useNavigate } from "react-router-dom";
import { pokeTypes } from "../types/pokeTypes";
export const useFormatCard = (pokemonId=1) => {

    const formatNumber = (number) => {
        if (number >= 10 && number < 100) {
          return "0" + number;
        } else if (number < 10 && number >= 1) {
          return "00" + number;
        } else {
          return number;
        }
      };
      const cardColor = (firstType) => {
        return pokeTypes[firstType];
      };
      const formatHW = (value) => {
        return value / 10;
      };
      const navigate = useNavigate();
    
      const onNavigateSearch = () => {
        navigate("/search");
      };
      const onNavigatePokeDetail = () => {
        navigate(`/detail/${pokemonId}`);
      };

      return{
        formatNumber,
        cardColor,
        formatHW,
        onNavigateSearch,
        onNavigatePokeDetail
      }
}