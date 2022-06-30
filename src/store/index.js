import { configureStore } from '@reduxjs/toolkit'
import nameUser from './slices/nameUser.slice'
import pokemon from './slices/pokemon.slice'

export default configureStore({
  reducer: {
    nameUser,
    pokemon
  }
})