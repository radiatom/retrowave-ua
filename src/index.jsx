import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store,{persistor} from "./redux/redux";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
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
