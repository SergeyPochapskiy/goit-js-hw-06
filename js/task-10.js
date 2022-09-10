const createBoxes = amount => {
	const boxesAdd = []
	for (let i = 0; i < amount; i++) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		boxesAdd.push(div)
	}
	return boxesAdd
}

const inputControlsRef = document.querySelector('#controls>input')
const buttonCreateRef = document.querySelector('button[data-create]')
const buttonDestroyRef = document.querySelector('button[data-destroy]')
const boxesRef = document.querySelector('#boxes')

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const destroyBoxes = () => {
	boxesRef.innerHTML = ''
}

buttonCreateRef.addEventListener('click', () => {
	let elemensAdd = createBoxes(inputControlsRef.value)
	boxesRef.append(...elemensAdd)
})

console.log(inputControlsRef.value)

buttonDestroyRef.addEventListener('click', () => {
	destroyBoxes.call()
})