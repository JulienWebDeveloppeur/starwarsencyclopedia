import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AgencesState {
  likes: {
    characters: string[];
  };
}

const initialState: AgencesState = {
  likes: {
    characters: [],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLikedCharacter: (state, action: PayloadAction<string>) => {
      state.likes.characters = [...state.likes.characters, action.payload];
    },
    unsetLikedCharacter: (state, action: PayloadAction<string>) => {
      state.likes.characters = state.likes.characters.filter(
        c => c !== action.payload,
      );
    },
  },
});

export const {setLikedCharacter, unsetLikedCharacter} = userSlice.actions;

export const userReducer = userSlice.reducer;
