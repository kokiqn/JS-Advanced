function toggle() {
    let extraDiv = document.getElementById('extra');
    let buttonElement = document.querySelector('.button');

    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        extraDiv.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        extraDiv.style.display = 'none';
    }
}
