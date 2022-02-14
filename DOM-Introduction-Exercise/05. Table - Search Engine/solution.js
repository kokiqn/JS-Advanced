function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRowElements = Array.from(document.querySelectorAll('.container tbody tr'));
      tableRowElements.forEach(el => el.classList.remove('select'));
      let searchField = document.getElementById('searchField');

      let matchesFound = tableRowElements.filter(el => el.textContent.includes(searchField.value));
      matchesFound.forEach(match => match.classList.add('select'));

      searchField.value = '';
   }
}
