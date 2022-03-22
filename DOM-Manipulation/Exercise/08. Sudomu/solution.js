function solve() {
    let tableRows = Array.from(document.querySelectorAll('tbody > tr'));
    let tableElement = document.querySelector('table');
    let inputElements = document.querySelectorAll('td > input');
    let paragraphElement = document.querySelector('#check > p');
    let [checkBtn, clearBtn] = document.querySelectorAll('button');

    checkBtn.addEventListener('click', onQuickCheck);
    clearBtn.addEventListener('click', onClear);

    function onQuickCheck() {
        let isSolved = checkMatrix();
        tableElement.style.border = isSolved ? '2px solid green' : '2px solid red';
        paragraphElement.style.color = isSolved ? 'green' : 'red';
        paragraphElement.textContent = isSolved ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
    }

    function onClear() {
        inputElements.forEach(v => v.value = '');
        tableElement.style.border = '';
        paragraphElement.textContent = '';
    }

    function createMatrix() {
        let matrix = [];
        tableRows.forEach(tr => {
            let tds = Array.from(tr.children);
            let tdArr = tds.map(td => td.children[0].value);
            matrix.push(tdArr);
        });

        return matrix;
    }

    function checkMatrix() {
        let matrix = createMatrix();
        // let isWin = true; replaced by a direct return false/true
        for (let row = 0; row < matrix.length; row++) {
            let rowsToCheck = {
                0: [1, 2],
                1: [0, 2],
                2: [0, 1]
            }

            let rowsToCheckValues = rowsToCheck[row];
            let currentRow = matrix[row];

            for (let col = 0; col < matrix[row].length; col++) {
                let currentValue = matrix[row][col];

                for (const r of rowsToCheckValues) {
                    if (matrix[r][col] == currentValue) return false;
                }

                if (currentRow.lastIndexOf(currentValue) != col) return false;
            }
        }

        return true;
    }
}
