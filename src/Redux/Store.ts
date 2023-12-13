import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./root.reducers";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(allReducers,applyMiddleware(thunk));
const store = configureStore({
    reducer: allReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }).concat(thunk),
})
export default store;