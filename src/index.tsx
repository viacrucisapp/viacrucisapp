import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";


import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import global_pt from "./translations/pt/global.json"
import global_it from "./translations/it/global.json"
import lectures_es from "./translations/es/lectures.json"
import lectures_en from "./translations/en/lectures.json"
import lectures_pt from "./translations/pt/lectures.json"
import lectures_it from "./translations/it/lectures.json"



const lang = function() {
  let navLang = navigator.language
  let langSplit = navLang.split('-')[0]
  if(langSplit === 'es' || langSplit === 'en' || langSplit === 'pt' || langSplit === 'it'){
    return langSplit
  } 
    return 'en'
} 



i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: lang(),
  resources: {
    es: {
      global: global_es,
      lectures: lectures_es
    },
    en: {
      global: global_en,
      lectures: lectures_en
    },
    pt: {
      global: global_pt,
      lectures: lectures_pt
    },
    it: {
      global: global_it,
      lectures: lectures_it
    }
  },
  react: {
    
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true, // allow <br/> and simple html elements in translations
    transKeepBasicHtmlNodesFor: ['br', 'i', 'b', 'p', 'ul', 'li'], // don't convert to <1></1> if simple react elements
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
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
