import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "45ahb47k7856894ed845w1trk4f",
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

window.store = store;

export default store;
