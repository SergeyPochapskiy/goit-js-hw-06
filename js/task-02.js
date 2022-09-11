const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const IngredientsRef = document.querySelector('#ingredients')
const liArray = ingredients.map(ingredients => {
	const item = document.createElement('li')
	item.textContent = ingredients
  item.className = 'item'
	return item
})


IngredientsRef.append(...liArray)