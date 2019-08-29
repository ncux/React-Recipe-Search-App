import React, { useState } from 'react';


const Recipes = ({ title, ingredients, calories, image }) => {

    return (
      <div className="">
          <h1>{ title }</h1>
          <p>Calories: { Math.floor(calories) }</p>
          <img src={ image } alt="Recipe image" />
      </div>
    );
};



export default Recipes;

