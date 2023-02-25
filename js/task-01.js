
// v1

const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach( category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryEl = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryEl}`);
});



// v2
// const categories = document.querySelectorAll('#categories .item');

// console.log(`Number of categories: ${categories.length}`);

// categories.forEach(category => {
//   const categoryName = category.querySelector('h2').textContent;
//   const categoryElements = category.querySelectorAll('li').length;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryElements}`);
// });

// v3

// const categoriesList = document.querySelector('#categories');
// const categories = categoriesList.children;

// console.log(`Number of categories: ${categories.length}`);

// for (const category of categories) {
//   const categoryName = category.querySelector('h2').textContent;
//   const categoryElements = category.querySelectorAll('li').length;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryElements}`);
// }


// v4

// const categoriesList = document.querySelector('#categories');
// const categories = categoriesList.children;

// console.log(`Number of categories: ${categories.length}`);

// for (let i = 0; i < categories.length; i++) {
//   const category = categories[i];
//   const categoryName = category.querySelector('h2').textContent;
//   const categoryElements = category.querySelectorAll('li').length;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryElements}`);
// }


