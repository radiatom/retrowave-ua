import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from "./reducer";


const reducers = combineReducers({
    dataPage: reducer,          
});

const persistConfig = {
    key: '84645213454jfkfydstr',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    // devTools: process.env.NODE_ENV !== 'production',
    // middleware: [thunk]
});

export default store;