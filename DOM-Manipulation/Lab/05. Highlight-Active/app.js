function focused() {
    let inputFields = document.querySelectorAll('input');
    for (const inputField of inputFields) {
        inputField.addEventListener('focus', onFocus);
        inputField.addEventListener('blur', onBlur);
    }

    function onFocus(e) {
        let parentDiv = e.target.parentNode;
        parentDiv.classList.add('focused');
    }

    function onBlur(e) {
        let parentDiv = e.target.parentNode;
        parentDiv.classList.remove('focused');
    }
}
