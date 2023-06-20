import React from 'react';
import { Provider } from 'react-redux';
import './style.css';
import store from './Utils/store';
import Head from './Components/Head';
import Body from './Components/Body';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}
