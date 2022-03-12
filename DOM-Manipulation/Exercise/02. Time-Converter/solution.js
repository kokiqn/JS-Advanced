function attachEventsListeners() {
    let convertButtons = document.querySelectorAll('input[type="button"]');

    for (const button of convertButtons) {
        button.addEventListener('click', onClick);
    }

    function onClick(e) {
        let type = e.target.parentElement.children[1].id;
        let inputValue = e.target.parentElement.children[1].value;

        let seconds = 0;

        switch (type) {
            case 'seconds':
                seconds = inputValue;
                break;
            case 'minutes':
                seconds = inputValue * 60;
                break;
            case 'hours':
                seconds = inputValue * 3600;
                break;
            case 'days':
                seconds = inputValue * 86400;
                break;
        }
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        document.getElementById("days").value = days;
        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;
    }
}
