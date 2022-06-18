function validate() {
    const emailFieldElement = document.getElementById('email');
    emailFieldElement.addEventListener('change', validateEmail);

    function validateEmail(e) {
        let regEx = /[a-z]+@[a-z]+\.[a-z]+/;
        if (regEx.test(e.target.value)) {
            emailFieldElement.classList.remove('error');
            e.target.value = '';
        } else {
            emailFieldElement.classList.add('error');
        }
    }
}
