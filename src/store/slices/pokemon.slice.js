import { createSlice } from '@reduxjs/toolkit';

export const pokemon = createSlice({
    name: 'pokemon',
    initialState: '',
    reducers: {
        getNamePokemon: (state, action) => action.payload
    }
})

export const { getNamePokemon } = pokemon.actions;

export default pokemon.reducer;
