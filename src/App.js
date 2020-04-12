import React, { useEffect } from "react";
import axios from "axios";
import { useDebouncedCallback } from "use-debounce";
import { formatRelative } from "date-fns";

const instance = axios.create({
  baseURL: "https://translate.yandex.net/api/v1.5/tr.json/",
});

function mergeParams(params) {
  return {
    key:
      "trnsl.1.1.20200412T100451Z.4ac199cf689eab8d.26e9890d9ff3681a1382cbbdb0ddf3c29ef4476d",
    ...params,
  };
}

function App({ state, actions }) {
  useEffect(() => {
    (async function () {
      const { data } = await instance.get("/getLangs", {
        params: mergeParams({ ui: "ru" }),
      });
      actions.languages.set(data.langs);
    })();
  }, [actions.languages]);

  const [translate] = useDebouncedCallback(async function translate() {
    console.log(state);
    const { data } = await instance.get("/translate", {
      params: mergeParams({
        ui: "ru",
        text: state.text,
        lang: `${state.from}-${state.to}`,
      }),
    });
    actions.translation.set(data.text[0]);
  }, 1000);

  useEffect(() => {
    if (state.text.trim() !== "") {
      translate();
    }
  }, [state.text, state.from, state.to, translate]);

  function LanguageSelector({ type }) {
    return (
      <select
        className="language"
        onChange={(event) => actions[type].set(event.target.value)}
        value={state[type]}
      >
        {Object.entries(state.languages)
          .sort((a, b) => a[1].localeCompare(b[1]))
          .map(([key, language]) => (
            <option key={key} value={key}>
              {language}
            </option>
          ))}
      </select>
    );
  }

  function handleChange(event) {
    actions.setText(event.target.value);
  }

  function handleSave() {
    actions.save(Date.now());
  }

  return (
    <div>
      <div className="languages">
        <LanguageSelector type="from" />
        <button type="button" className="switch" onClick={actions.switch}>
          ⇄
        </button>
        <LanguageSelector type="to" />
      </div>
      <div className="from">
        <textarea
          placeholder="Введите текст для перевода"
          value={state.text}
          onChange={handleChange}
        ></textarea>
        {state.text && (
          <button type="button" className="clear" onClick={actions.clear}>
            ✕
          </button>
        )}
      </div>
      <small className="characters-left">{9999 - state.text.length}</small>
      <div className="from">
        <textarea readOnly value={state.translation}></textarea>
        {state.translation && (
          <button type="button" className="save" onClick={handleSave}>
            ➔
          </button>
        )}
      </div>
      <footer>
        <div className="history-header">
          <div className="history-title">История</div>
          {/* <button type="button">См все</button> */}
        </div>
        {state.history.length === 0 ? (
          <div className="empty">
            <h2>Пусто</h2>
            Нет последних переводов
          </div>
        ) : (
          state.history.map(({ from, to, text, translation, timestamp }) => (
            <div key={timestamp} class="history-item">
              <div className="history-item-from">
                <small className="history-item-header">
                  <div>{state.languages[from]}</div>
                  <div>{formatRelative(timestamp, Date.now())}</div>
                </small>
                <div>{text}</div>
              </div>
              <div className="history-item-to">
                <small className="history-item-header">
                  <div>{state.languages[to]}</div>
                </small>
                <div>{translation}</div>
              </div>
            </div>
          ))
        )}
      </footer>
    </div>
  );
}

export default App;
