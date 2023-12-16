import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './context/ModalContext';
import { NoteProvider } from './context/DataContext';
import { SnackbarProvider } from 'notistack'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteProvider>
      <StateProvider >
        <SnackbarProvider anchorOrigin={{ horizontal : 'right' , vertical:'top' }} >
          <App />
        </SnackbarProvider>
      </StateProvider>
    </NoteProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
