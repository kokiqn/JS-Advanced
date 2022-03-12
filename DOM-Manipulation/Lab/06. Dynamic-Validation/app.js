function validate() {
    let inputFieldElement = document.getElementById('email');
    let validEmailRegex = /\b([a-z]+)@([a-z]+)\.([a-z]+)/g

    inputFieldElement.addEventListener('change', (e) => {
        if (!e.target.value.match(validEmailRegex)) {
            inputFieldElement.classList.add('error');
        } else {
            inputFieldElement.classList.remove('error');
            inputFieldElement.value = '';
        }
    })
}
