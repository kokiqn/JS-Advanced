function lockedProfile() {
    let showMoreButtons = [...document.querySelectorAll('button')];
    showMoreButtons.forEach(btn => btn.addEventListener('click', toggleFields));

    function toggleFields(e) {
        let button = e.target;
        let currentProfile = button.parentElement;
        let isLocked = currentProfile.querySelector('input[type="radio"]').checked;
        let hiddenFields = currentProfile.querySelector('div');

        if (isLocked) return;

        if (!hiddenFields.style.display) {
            hiddenFields.style.display = 'block';
            button.textContent = 'Hide it';
        } else {
            hiddenFields.style.display = '';
            button.textContent = 'Show more';
        }
    }
}
