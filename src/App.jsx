import React from 'react';
import { Link } from 'react-router-dom';
import { MyRoutes } from './routers/router';
import './App.css';

function App() {
  return (
    <div>
      <header>
          <h1 className="title">I'm Eliasib :)🎥</h1>
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;


