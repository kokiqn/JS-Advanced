function addItem() {
    let newItemText = document.getElementById('newItemText');
    let itemListElement = document.getElementById('items');

    let liItemElement = document.createElement('li');
    liItemElement.textContent = newItemText.value;

    // Add delete button
    let deleteButtonElement = document.createElement('a');
    deleteButtonElement.setAttribute('href', '#');
    deleteButtonElement.textContent = '[Delete]';

    // Attach event to button
    deleteButtonElement.addEventListener('click', e => e.currentTarget.parentNode.remove())

    // Append to HTML code
    liItemElement.appendChild(deleteButtonElement);
    itemListElement.appendChild(liItemElement);
    newItemText.value = '';
}
