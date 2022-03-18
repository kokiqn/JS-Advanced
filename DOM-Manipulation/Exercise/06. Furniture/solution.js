function solve() {
    let [inputTextArea, outputTextArea] = document.querySelectorAll('textarea');
    let [generateButton, buyButton] = document.querySelectorAll('button');
    let tableBody = document.querySelector('tbody');

    generateButton.addEventListener('click', addRowToTable);
    buyButton.addEventListener('click', buyFurniture);

    function addRowToTable() {
        let furniture = JSON.parse(inputTextArea.value);
        furniture.forEach(item => {
            let values = Object.values(item);
            let tableRow = tableBody.insertRow(-1);
            let imgContent = document.createElement('img');
            imgContent.src = values.splice(1, 1);

            let tableData = tableRow.insertCell(0);
            tableData.appendChild(imgContent);

            for (let i = 0; i < 4; i++) {
                tableData = tableRow.insertCell();
                let content = document.createElement('p');
                content.textContent = values[i];

                if (i === 3) {
                    content = document.createElement('input');
                    content.setAttribute('type', 'checkbox');
                }

                tableData.appendChild(content);
            }
        });
    }

    function buyFurniture() {
        let boughtFurniture = Array.from(document.querySelectorAll('tbody > tr input:checked'));
        let nameList = [];
        let totalFactor = [];
        let totalPrice = 0;

        boughtFurniture.forEach(item => {
            let paragraphContent = Array.from(item.parentElement.parentElement.querySelectorAll('td > p'));
            let [name, price, decFactor] = paragraphContent.map(td => td.textContent);
            nameList.push(name);
            totalFactor.push(Number(decFactor));
            totalPrice += Number(price);
        })

        let avgFactor = totalFactor.reduce((a, x) => a += x, 0) / totalFactor.length;
        outputTextArea.textContent = `Bought furniture: ${nameList.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgFactor}`
    }

}
