import React from 'react';
import ReactDOM from 'react-dom/client';
import { Contextprov } from './stateprovider/provider.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer,{initial} from './stateprovider/reducer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode> 
    <Contextprov reducer={reducer} initial={initial} >
    <App />
    </Contextprov>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
