import { createSlice } from "@reduxjs/toolkit";

const confifSlice = createSlice(
    {
        name: 'config',
        initialState: {
            language: "en"
        },
        reducers: {
            changeLanguage: (state, action) => {
                state.language = action.payload;
            }
        }
    }
)

export const { changeLanguage } = confifSlice.actions;
export default confifSlice.reducer;