function generateReport() {
    let tableHeaders = document.querySelectorAll('input');
    let tableRows = Array.from(document.querySelectorAll('tbody > tr')).map(x => Array.from(x.children));
    let outputData = []

    for (let tr = 0; tr < tableRows.length; tr++) {
        let obj = {};
        for (let td = 0; td < tableRows[tr].length; td++) {
            if (tableHeaders[td].checked) obj[tableHeaders[td].name] = tableRows[tr][td].textContent;
        }
        outputData.push(obj);
    }

    document.getElementById('output').value = JSON.stringify(outputData);
}
