function extract(content) {
  let targetParagraph = document.getElementById(content);
  let regex = /\(([^)]+)\)/g;
  let result = targetParagraph.textContent.match(regex);
  return result.join('; ')
}
