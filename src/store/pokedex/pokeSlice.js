import { createSlice } from "@reduxjs/toolkit";


export const pokeSlice = createSlice({
  name: "poke",
  initialState: {
    isLoading: false,
    messageSaved: "",
    pokedex: [],
    poketypes:  JSON.parse(localStorage.getItem('lastOrder')) || [
      { name: "bug", color: "#818F16", selected: false },
      { name: "dark", color: "#50413F", selected: false },
      { name: "dragon", color: "#5060E1", selected: false },
      { name: "electric", color: "#FAC000", selected: false },
      { name: "fairy", color: "#EF70EF", selected: false },
      { name: "fighting", color: "#FF8000", selected: false },
      { name: "fire", color: "#E62829", selected: false },
      { name: "flying", color: "#7EB5EA", selected: false },
      { name: "ghost", color: "#704170", selected: false },
      { name: "grass", color: "#3FA129", selected: false },
      { name: "ground", color: "#73401A", selected: false },
      { name: "ice", color: "#3FD8FF", selected: false },
      { name: "normal", color: "#9FA19F", selected: false },
      { name: "poison", color: "#7F39B2", selected: false },
      { name: "psychic", color: "#EF4179", selected: false },
      { name: "rock", color: "#8B8767", selected: false },
      { name: "steel", color: "#60A1B8", selected: false },
      { name: "water", color: "#2980EF", selected: false },
    ],
  },
  reducers: {
    loadPokemon: (state) => {
      state.isLoading = true;
    },
    addCollectionPokemons: (state, action) => {
      state.pokedex = action.payload;
      state.isLoading = false;
    },
    sortAlphabetically: (state) => {
      state.pokedex = state.pokedex.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      state.isLoading = false;
    },
    sortByNumber: (state) => {
      state.pokedex = state.pokedex.sort((a, b) => b.id - a.id).reverse();
      state.isLoading = false;
    },
    updateStatePokeType: (state,action)=>{
      state.poketypes = action.payload;
    }
  },
});

export const {
  loadPokemon,
  addCollectionPokemons,
  sortAlphabetically,
  sortByNumber,
  updateStatePokeType
} = pokeSlice.actions;
