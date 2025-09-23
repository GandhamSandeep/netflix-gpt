import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./GptSlice"; // GPT Slice
import configReducer from "./configSlice"; // Config Slice


const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            config: configReducer
        },
    }
);

export default appStore;