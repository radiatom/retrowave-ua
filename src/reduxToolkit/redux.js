import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import reducer from "./reducer";


const reducers = combineReducers({
    dataPage: reducer,          
});

const persistConfig = {
    key: '846452hfkf45jljydstr',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
});

export default store;