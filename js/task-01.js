
// v1

const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});

// v2

// const categoriesList = document.querySelector('#categories');
// const categories = categoriesList.children;

// console.log(`Number of categories: ${categories.length}`);

// for (const category of categories) {
//   const categoryName = category.querySelector('h2').textContent;
//   const categoryElements = category.querySelectorAll('li').length;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryElements}`);
// }


// v3

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


