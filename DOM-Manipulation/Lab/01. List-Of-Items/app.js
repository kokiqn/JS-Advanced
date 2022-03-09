function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    let listElement = document.getElementById('items');

    let newListItemElement = document.createElement('li');
    newListItemElement.textContent = newItemTextElement.value;
    listElement.appendChild(newListItemElement);
}
