import { createSlice } from "@reduxjs/toolkit";

export const pokeSlice = createSlice({
    name: "poke",
    initialState: {
      isLoading: true,
      messageSaved: "",
      pokedex: [],
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
          state.pokedex = state.pokedex.sort((a, b) =>{
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
        state.pokedex = state.pokedex.sort((a, b) => b.id-a.id).reverse();
        state.isLoading = false;
    }
    }
});

export const { loadPokemon,addCollectionPokemons,sortAlphabetically,sortByNumber } = pokeSlice.actions;