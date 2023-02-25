const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//v1

const ingredientsEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const ingredientsChildren = document.createElement('li');
  ingredientsChildren.textContent = ingredient;
  ingredientsChildren.classList.add('item');
  ingredientsEl.appendChild(ingredientsChildren);
});

//v2

// const ingredientsList = document.querySelector("#ingredients");

// const ingredientsElements = ingredients.map((ingredient) => {
//   const ingredientElement = document.createElement("li");
//   ingredientElement.textContent = ingredient;
//   ingredientElement.classList.add("item");
//   return ingredientElement;
// });

// ingredientsList.append(...ingredientsElements);


