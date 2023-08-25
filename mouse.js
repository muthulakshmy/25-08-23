const mouse = document.getElementById('mouse');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    mouse.textContent = `x: ${x}, y: ${y}`;
});
