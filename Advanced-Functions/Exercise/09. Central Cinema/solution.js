function solve() {
    let [onScreenBtn, clearBtn] = document.querySelectorAll('button');
    let [movieName, hallName, ticketPrice] = Array.from(document.querySelectorAll('input'));
    let [moviesList, archiveList] = document.querySelectorAll('ul');

    onScreenBtn.addEventListener('click', addMovie);
    clearBtn.addEventListener('click', clearArchives);

    function addMovie(e) {
        e.preventDefault();
        if (movieName.value == '' || hallName.value == '' ||
            !ticketPrice.value || isNaN(Number(ticketPrice.value))) {

            clearInput();
            return;
        }

        let liMovieElement = document.createElement('li');
        let movieNameElement = document.createElement('span');
        movieNameElement.textContent = movieName.value;

        let hallNameElement = document.createElement('strong');
        hallNameElement.textContent = `Hall: ${hallName.value}`;

        let divElement = document.createElement('div');

        let ticketPriceElement = document.createElement('strong');
        ticketPriceElement.textContent = Number(ticketPrice.value).toFixed(2);

        let ticketsSoldInput = document.createElement('input');
        ticketsSoldInput.placeholder = 'Tickets Sold';

        let archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';
        archiveButton.addEventListener('click', archiveBtn);

        divElement.appendChild(ticketPriceElement);
        divElement.appendChild(ticketsSoldInput);
        divElement.appendChild(archiveButton);

        liMovieElement.appendChild(movieNameElement);
        liMovieElement.appendChild(hallNameElement);
        liMovieElement.appendChild(divElement);

        moviesList.appendChild(liMovieElement);
        clearInput();

        function archiveBtn(e) {
            if (isNaN(Number(ticketsSoldInput.value)) || !ticketsSoldInput.value) {
                ticketsSoldInput.value = '';
                return;
            }

            let totalProfit = Number(ticketPriceElement.textContent) * Number(ticketsSoldInput.value);

            let archiveMovieNameElement = document.createElement('span');
            archiveMovieNameElement.textContent = movieNameElement.textContent;

            let totalAmountElement = document.createElement('strong');
            totalAmountElement.textContent = `Total amount: ${totalProfit.toFixed(2)}`;

            let deleteButtonElement = document.createElement('button');
            deleteButtonElement.textContent = 'Delete';
            deleteButtonElement.addEventListener('click', deleteBtn);

            let liArchiveElement = document.createElement('li');
            liArchiveElement.appendChild(archiveMovieNameElement);
            liArchiveElement.appendChild(totalAmountElement);
            liArchiveElement.appendChild(deleteButtonElement);

            archiveList.appendChild(liArchiveElement);
            e.target.parentElement.parentElement.remove();

            function deleteBtn(e) {
                archiveList.removeChild(e.target.parentNode);
            }
        }
    }

    function clearArchives() {
        let allLiElements = Array.from(document.querySelectorAll('#archive li'));
        allLiElements.forEach(li => archiveList.removeChild(li));
    }

    function clearInput() {
        movieName.value = '';
        hallName.value = '';
        ticketPrice.value = '';
    }
}
