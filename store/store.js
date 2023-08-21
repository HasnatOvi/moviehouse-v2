import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
    },
});


//write a function add two number
