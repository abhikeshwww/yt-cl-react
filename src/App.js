import React from 'react';
import { Provider } from 'react-redux';
import './style.css';
import Head from './Components/Head';
import Body from './Components/Body';

export default function App() {
  return (
    <Provider>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}
