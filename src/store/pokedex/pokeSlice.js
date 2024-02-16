import { createSlice } from "@reduxjs/toolkit";

export const pokeSlice = createSlice({
    name: "pokedex",
    initialState: {
      isLoading: false,
      messageSaved: "",
      pokedex: [],
    },
    reducers: {
        loadPokemon: (state) => {
          state.isLoading = true;
        },
        addNewPokemon: (state, action) => {
            state.pokedex.push(action.payload);
            state.isLoading = false;
        },
        deletePokemonById: (state, action) => {
            state.pokedex = state.pokedex.filter(pokemon=>pokemon.id!==action.payload);
            state.isLoading = false;
        },
    }
})