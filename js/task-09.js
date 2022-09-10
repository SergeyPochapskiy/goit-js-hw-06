function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const changeBtnRef = document.querySelector('button.change-color')
const bodyRef = document.querySelector('body')
const colorValueRef = document.querySelector('span.color')

changeBtnRef.addEventListener('click', event => {
  let color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorValueRef.textContent = color;
})