function solve() {
    let inputElement = document.getElementById('input');
    let outputElement = document.getElementById('result');

    let dropdownElement = document.getElementById('selectMenuTo');
    let buttonElement = document.querySelector('button');

    dropdownElement.innerHTML = '<option selected value=binary>Binary</option>'
        + '<option value=hexadecimal>Hexadecimal</option>';

    buttonElement.addEventListener('click', () => {
        if (dropdownElement.value === 'binary') outputElement.value = Number(inputElement.value).toString(2);
        else outputElement.value = Number(inputElement.value).toString(16).toUpperCase();
    })
}
