import {applyMiddleware, combineReducers, createStore} from "redux";
import {AppReducer} from "./appReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
   appReducer: AppReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

