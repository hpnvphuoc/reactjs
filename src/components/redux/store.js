import {combineReducers, createStore} from "redux"
import { wordReducer } from "./reducer/wordreducer";
import { shouldShowFormReducer } from "./reducer/shouldShowFormReducer";
import { filterModeReducer } from "./reducer/filterModeReducer";

const reducer=combineReducers({
    words:wordReducer,
    shouldShowForm:shouldShowFormReducer,
    filetermode:filterModeReducer

})
const store=createStore(reducer);

export default store;