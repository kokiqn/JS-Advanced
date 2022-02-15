function solve() {
  let textAreaElement = document.getElementById('input');
  let outputDiv = document.getElementById('output');
  let sentences = textAreaElement.value.split(/\s*\.\s*/).filter(Boolean);

  while (sentences.length > 0) {
    let current = sentences.splice(0, 3);
    let paragraph = current.join('. ') + '.';
    outputDiv.innerHTML += `<p>${paragraph}</p>`
  }
}
