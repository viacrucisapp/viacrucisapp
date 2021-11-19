import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import lectures_es from "./translations/es/lectures.json"
import lectures_en from "./translations/en/lectures.json"



i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: "es",
  resources: {
    es: {
      global: global_es,
      lectures: lectures_es
    },
    en: {
      global: global_en,
      lectures: lectures_en
    }
  },
  react: {
    
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true, // allow <br/> and simple html elements in translations
    transKeepBasicHtmlNodesFor: ['br', 'i', 'b', 'p'], // don't convert to <1></1> if simple react elements
    transWrapTextNodes: ''
  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
