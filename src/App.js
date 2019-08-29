import React, { useEffect, useState } from 'react';
import Recipes from "./components/recipes";
import axios from 'axios';
import './App.css';

const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;


const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  // useEffect( () => {
  //     console.log('hi');
  //     async function fetchRecipes() {
  //         let response = await axios.get(queryUrl);
  //         console.log(response.data);
  //         setRecipes(response.data.hits);
  //     }
  //     fetchRecipes();
  // }, []);

  const onChangeSearchInput = e => {
      setQuery( e.target.value );
  };

  const getQuery = async e => {
    e.preventDefault();
    if(query !== '') {
        let queryUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
        let response = await axios.get(queryUrl);
        console.log(response.data);
        setRecipes(response.data.hits);
        setQuery('');
    }
  };


  return (
    <div className="App">
        {/*<h1>React Recipe Search App</h1>*/}

        <form onSubmit={ getQuery } className="search-form">

          <input value={ query } name="query" onChange={ onChangeSearchInput } placeholder="Search for a recipe" className="search-input"/>
        <button type="submit" className="search-button">Search</button>
      </form>
        <br />
        <div className="recipes-list">
            { recipes.map(recipe => (
                <Recipes
                    key={ recipe.recipe.label }
                    title={ recipe.recipe.label }
                    ingredients={ recipe.recipe.ingredients }
                    calories={ recipe.recipe.calories }
                    image={ recipe.recipe.image } />
            )) }
        </div>

    </div>
  );
};

export default App;
