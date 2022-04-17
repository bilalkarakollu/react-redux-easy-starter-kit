import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducer/counterReducer";

const reducers = combineReducers({
    counterReducer
})

export const store = createStore(reducers);