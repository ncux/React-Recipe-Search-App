import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;
const searchUrl = `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`;

const App = () => {

  useEffect(() => {
      console.log('hi');
  });

  return (
    <div className="App">
      <h1>Hi!</h1>
      <form className="search-form">
        <input className="search-input"/>
        <button type="submit"  className="search-button">Search</button>
      </form>
    </div>
  );
};

export default App;
