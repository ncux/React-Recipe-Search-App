import React from 'react';
import styles from './recipes.module.css';


const Recipes = ({ title, ingredients, calories, image }) => {

    return (
      <div className={ styles.recipe }>
          <h1>{ title }</h1>
          <p>Calories: { Math.floor(calories) }</p>
          <img src={ image } className={ styles.images } alt="Recipe image" />
          <ul className={ styles.ingredients }>
              { ingredients.map(ingredient => (
                  <li>{ ingredient.text }</li>
              )) }
          </ul>
      </div>
    );
};



export default Recipes;

