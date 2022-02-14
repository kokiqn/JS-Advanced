function solve() {
  let textValue = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  let stringArr = textValue.toLowerCase().split(' ');

  if (namingConvention == 'Camel Case') {
    for (let i = 1; i < stringArr.length; i++) {
      let currentString = stringArr[i];
      stringArr[i] = currentString.charAt(0).toUpperCase() + currentString.slice(1);
      resultElement.textContent = stringArr.join('');
    }
  } else if (namingConvention == 'Pascal Case') {
    for (let i = 0; i < stringArr.length; i++) {
      let currentString = stringArr[i];
      stringArr[i] = currentString.charAt(0).toUpperCase() + currentString.slice(1);
      resultElement.textContent = stringArr.join('');
    }
  } else {
    resultElement.textContent = 'Error!';
  }
}
