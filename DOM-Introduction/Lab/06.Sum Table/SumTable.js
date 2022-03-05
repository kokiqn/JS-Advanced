function sumTable() {
  let tableDataElements = Array.from(document.querySelectorAll('td:nth-child(2)'));
  let sumElement = tableDataElements.pop();
  let sum = 0;

  for (const tableDataElement of tableDataElements) {
    sum += Number(tableDataElement.textContent);
  }

  sumElement.textContent = sum;
}
