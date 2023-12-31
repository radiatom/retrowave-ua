import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "45ah1b478p56894ed8g5gfd45w1htrk4f",
    storage,
}; // для local storage

const redusers = combineReducers({
    dataPage: reducer,
});
const persistedReducer = persistReducer(persistConfig, redusers); //для local storage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    // redusers,
    persistedReducer, //для local storage
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export const persistor = persistStore(store); //для local storage

export default store;
