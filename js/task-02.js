const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const IngredientsRef = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(ingredient => {
	const item = document.createElement('li')
	item.textContent = ingredient
  item.className = 'item'
	liArray.push(item)
})


IngredientsRef.append(...liArray)