function create(words) {
   words.forEach(str => {
      let paragraph = document.createElement('p');
      let div = document.createElement('div');

      paragraph.textContent = str;
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      div.addEventListener('click', () => paragraph.style.display = 'block');

      let contentElement = document.getElementById('content');
      contentElement.appendChild(div);
   })
}
