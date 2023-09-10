import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import store,{persistor} from "./reduxToolkit/redux";
import store from "./reduxToolkit/redux"
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

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

reportWebVitals();
