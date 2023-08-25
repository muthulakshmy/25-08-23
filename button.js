const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    if (btn.textContent === 'click me') {
        btn.textContent = 'clicked....';
    } else {
        btn.textContent = 'click me';
    }
});
