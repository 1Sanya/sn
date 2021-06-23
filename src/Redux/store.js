import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";
import friendsReducer from "./friendsReducer";
import photosReducer from "./photosReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    friendsPage: friendsReducer,
    photosPage: photosReducer
});


let store = createStore(reducers);

export default store;