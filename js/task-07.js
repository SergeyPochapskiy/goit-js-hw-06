const inputFontsizeRef = document.querySelector('input#font-size-control')
const inputTextRef = document.querySelector('span#text')

inputFontsizeRef.addEventListener('change', event => {
    inputTextRef.style.fontSize = `${event.target.value }px`
})