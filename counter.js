const button = document.getElementById('btn');
const counter = document.getElementById('count');
let count = 0;

button.addEventListener('click', () => {
    count++;
    counter.textContent = `Click Count: ${count}`;
});
