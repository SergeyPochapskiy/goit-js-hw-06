let counterValue = 0

const сounterRef = document.querySelector('#value')
const buttonDecrementRef = document.querySelector('button[data-action="decrement"]')
const buttonIncrementRef = document.querySelector('button[data-action="increment"]')

 buttonDecrementRef.addEventListener('click', () => {
	counterValue --
	сounterRef.textContent = counterValue
})

buttonIncrementRef.addEventListener('click', () => {
	counterValue ++
	сounterRef.textContent = counterValue
})