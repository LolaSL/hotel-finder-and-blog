import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// import { PlaceContext } from './context/PlaceContext';
// import { HotelsContext } from './context/HotelsContext';


const value = {state, dispatch}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PlaceContext.Provider value={value}> */}
      <Provider store={store}>
        {/* <HotelsContext.Provider value={value}> */}
          <App />
        {/* </HotelsContext.Provider> */}
       </Provider>
    {/* </PlaceContext.Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
