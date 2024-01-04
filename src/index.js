import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";
import './index.css';
import App from './App';

import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GoogleOAuthProvider clientId="952890474851-lg74nckl50ds3u8rb5ifuce3matsu2cb.apps.googleusercontent.com">
   
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
  
          <BrowserRouter>
            <App />
          </BrowserRouter>

        </PersistGate>
      </Provider>
    </React.StrictMode>
</GoogleOAuthProvider>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
