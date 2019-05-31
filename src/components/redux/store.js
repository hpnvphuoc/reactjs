import {combineReducer, createStore} from "redux"
import { wordReducer } from "./reducer/wordreducer";

const reducer=combineReducer({
    words:wordReducer
})
const store=createStore(reducer);

export default store;