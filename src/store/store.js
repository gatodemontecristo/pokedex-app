import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { pokeSlice } from './pokedex'

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    poke:pokeSlice.reducer
  },
})