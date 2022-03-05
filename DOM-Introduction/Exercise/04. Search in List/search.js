function search() {
   let townsListElements = Array.from(document.querySelectorAll('#towns li'));
   let searchValue = document.getElementById('searchText').value;
   let matchesFound = townsListElements.filter(item => item.textContent.includes(searchValue));

   matchesFound.forEach(match => {
      match.style.fontWeight = 'bold';
      match.style.textDecoration = 'underline';
   });

   let result = document.getElementById('result');
   result.textContent = `${matchesFound.length} matches found`;
}
