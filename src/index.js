import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider, createStore, combineReducers } from "./my-redux";

import App from "./App";
import counterReducer from "./counterStore";

const rootReducer = combineReducers({
    counter: counterReducer
});
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
