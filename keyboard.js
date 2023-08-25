const text1 = document.getElementById('text');
const display1 = document.getElementById('display');

text1.addEventListener('input', () => {
    const enteredText = text1.value;
    display1.textContent = enteredText;
});
