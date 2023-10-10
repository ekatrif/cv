// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

/* Подключаем рендер html элементов */
import renderHtml from '../index.js';
renderHtml();