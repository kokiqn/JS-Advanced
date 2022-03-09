function deleteByEmail() {
    let emailTdElements = document.querySelectorAll('#customers tr td:last-child');
    let inputValueElement = document.querySelector('input').value;
    let deleted = false;

    for (const emailTdElement of emailTdElements) {
        if (emailTdElement.textContent === inputValueElement) {
            emailTdElement.parentElement.remove();
            deleted = true;
        }
    }

    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
}
