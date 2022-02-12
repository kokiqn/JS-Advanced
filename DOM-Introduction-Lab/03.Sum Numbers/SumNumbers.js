function calc() {
    let firstNumElement = document.getElementById('num1');
    let secondNumElement = document.getElementById('num2');
    let sumElement = document.getElementById('sum');

    sumElement.value = Number(firstNumElement.value) + Number(secondNumElement.value);
}
