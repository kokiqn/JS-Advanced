function lockedProfile() {
    let main = document.querySelector('main'); // can also be done by adding an event listener to each button
    main.addEventListener('click', (e) => {
        if (e.target.nodeName != 'BUTTON') return;

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
    })
}
