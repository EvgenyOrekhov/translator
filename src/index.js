import React from "react";
import ReactDOM from "react-dom";
import { init } from "actus";
import logger from "actus-logger";
import defaultActions from "actus-default-actions";
import localStoragePlugin from "actus-localstorage";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const initialState = {
  languages: [],
  from: "en",
  to: "ru",
  text: "",
  translation: "",
  history: [],
};

init([
  logger(),
  defaultActions(initialState),
  {
    state: initialState,
    actions: {
      setText: (text, state) => ({
        ...state,
        text,
        translation: text === "" ? "" : state.translation,
      }),
      switch: (ignore, state) => ({
        ...state,
        from: state.to,
        to: state.from,
        text: state.translation,
      }),
      clear: (ignore, state) => ({ ...state, text: "", translation: "" }),
      save: (timestamp, state) =>
        state.text === ""
          ? state
          : {
              ...state,
              history: [
                {
                  from: state.from,
                  to: state.to,
                  text: state.text,
                  translation: state.translation,
                  timestamp,
                },
                ...state.history,
              ],
            },
    },
    subscribers: [
      ({ state, actions }) => {
        ReactDOM.render(
          <React.StrictMode>
            <App state={state} actions={actions} />
          </React.StrictMode>,
          document.getElementById("root")
        );
      },
    ],
  },
  localStoragePlugin({
    selector: (state) => ({
      from: state.from,
      to: state.to,
      history: state.history,
    }),
  }),
]);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
