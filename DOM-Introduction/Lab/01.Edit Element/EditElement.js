function editElement(element, stringToMatch, replacer) {
    while (element.textContent.includes(stringToMatch)) {
        element.textContent = element.textContent.replace(stringToMatch, replacer);
    }
}
