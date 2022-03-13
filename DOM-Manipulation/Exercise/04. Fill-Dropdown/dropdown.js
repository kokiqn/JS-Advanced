function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    if (!newItemText.value && !newItemValue.value) return;

    let newOption = document.createElement('option');
    newOption.text = newItemText.value;
    newOption.value = newItemValue.value;
    document.getElementById('menu').appendChild(newOption);

    newItemText.value = '';
    newItemValue.value = '';
}
