import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
//@ts-ignore
import App from "./App";
//@ts-ignore
import store from "./reduxToolkit/redux"
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);//tollkit persist
root.render(
  <Provider store={store}>
        <React.StrictMode>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </React.StrictMode>
    </Provider>
);
