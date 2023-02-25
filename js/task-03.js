const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const galleryListItem = images
  .map(({ url, alt }) => {
    return `
    <li class="gallery__item">
    <img src="${url}" alt="${alt}" class="gallery__image" />
    </li>
    `;
  })
  .join('');

galleryList.insertAdjacentHTML("afterbegin", galleryListItem);

// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem


// elem.insertAdjacentHTML(position, string);
// Аргумент position - это строка, позиция относительно элемента elem. Принимает одно из четырёх значений.