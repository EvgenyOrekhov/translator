import React from "react";

function App() {
  return (
    <div>
      <div class="languages">
        <select class="language">
          <option>Русский</option>
          <option>English</option>
        </select>
        <button type="button" class="switch">
          ⇄
        </button>
        <select class="language">
          <option>Русский</option>
          <option>English</option>
        </select>
      </div>
      <div class="from">
        <textarea placeholder="Введите текст для перевода"></textarea>
        <button type="button" class="clear">
          ✕
        </button>
      </div>
      <small class="characters-left">9999</small>
      <div class="from">
        <textarea readOnly></textarea>
        <button type="button" class="save">
          ➔
        </button>
      </div>
      <footer>
        <div class="history-header">
          <div class="history-title">История</div>
          <button type="button">См все</button>
        </div>
        <div class="empty">
          <h2>Пусто</h2> Нет последних переводов
        </div>
        <div>
          <div class="history-item-from">
            <small class="history-item-header">
              <div>Русский</div>
              <div>Сегодня в 01:02</div>
            </small>
            <div>Привет</div>
          </div>
          <div class="history-item-to">
            <small class="history-item-header">
              <div>Английский</div>
            </small>
            <div>Hello</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
