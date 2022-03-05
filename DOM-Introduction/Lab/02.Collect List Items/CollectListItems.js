function extractText() {
    let listItemElements = document.querySelectorAll('#items li');
    let result = '';

    for (const item of listItemElements) {
        result += item.textContent.trim() + '\n';
    }

    let textAreaElement = document.getElementById('result');
    textAreaElement.textContent = result.trim();
}
