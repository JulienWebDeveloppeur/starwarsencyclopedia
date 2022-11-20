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
  },
});

export const {setLikedCharacter} = userSlice.actions;

export const userReducer = userSlice.reducer;
