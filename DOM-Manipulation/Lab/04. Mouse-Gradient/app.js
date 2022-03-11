function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', mouseMoveHandler);
    gradientElement.addEventListener('mouseout', () => resultElement.textContent = '');

    function mouseMoveHandler(e) {
        let percent = Math.trunc((e.offsetX / (e.target.clientWidth - 1) * 100));
        resultElement.textContent = `${percent}%`;
    }
}
