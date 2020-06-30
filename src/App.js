import React from 'react';
import './App.css';
import Fetcher from './components/Fetcher';

function App() {

  const { REACT_APP_URL } = process.env;

  return (
    <div className="App">
      <Fetcher url={`${REACT_APP_URL}/data`} header={'data component'} />
      <Fetcher url={`${REACT_APP_URL}/error`} header={'error component'} />
      <Fetcher url={`${REACT_APP_URL}/loading`} header={'loading component'} />
    </div>
  );
}

export default App;


