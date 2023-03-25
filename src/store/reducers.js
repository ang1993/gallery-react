import { combineReducers } from "redux";
import ArtReducer from "./art/reducer";
import UserReducer from "./auth/reducer";

const rootReducer = combineReducers({
    ArtReducer,
    UserReducer
})

export default rootReducer