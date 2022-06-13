function solve() {
    let [task, dueDate] = Array.from(document.querySelectorAll('input'));
    let description = document.querySelector('textarea');
    let [openSection, progressSection, completeSection] = Array.from(document.querySelectorAll('section:not(:nth-of-type(1))'));

    let addBtnElement = document.getElementById('add');
    addBtnElement.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();
        if (!task.value || !description.value || !dueDate.value) return;

        let titleElement = document.createElement('h3');
        titleElement.textContent = task.value;

        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${description.value}`;

        let dueDateElement = document.createElement('p');
        dueDateElement.textContent = `Due Date: ${dueDate.value}`;

        let startBtnElement = document.createElement('button');
        startBtnElement.classList.add('green');
        startBtnElement.textContent = 'Start';
        startBtnElement.addEventListener('click', onStart);

        let deleteBtnElement = document.createElement('button');
        deleteBtnElement.classList.add('red');
        deleteBtnElement.textContent = 'Delete';
        deleteBtnElement.addEventListener('click', onDelete);

        let parentDiv = document.createElement('div');
        parentDiv.classList.add('flex');
        parentDiv.appendChild(startBtnElement);
        parentDiv.appendChild(deleteBtnElement);

        let articleElemenet = document.createElement('article');
        articleElemenet.appendChild(titleElement);
        articleElemenet.appendChild(descriptionElement);
        articleElemenet.appendChild(dueDateElement);
        articleElemenet.appendChild(parentDiv);

        openSection.querySelector('div:nth-of-type(2)').appendChild(articleElemenet);

        task.value = '';
        description.value = '';
        dueDate.value = '';

        function onStart(e) {
            let currentTask = e.target.parentElement.parentElement;
            let buttons = (currentTask.querySelectorAll('button'));

            buttons[0].className = 'red';
            buttons[0].textContent = 'Delete';
            buttons[0].addEventListener('click', onDelete);

            buttons[1].classList = 'orange';
            buttons[1].textContent = 'Finish';
            buttons[1].addEventListener('click', onFinish);

            currentTask.remove();
            progressSection.querySelector('div:nth-of-type(2)').appendChild(currentTask);

            function onFinish(e) {
                e.target.parentElement.remove();
                completeSection.querySelector('div:nth-of-type(2)').append(currentTask);
            }
        }

        function onDelete(e) {
            e.target.parentElement.parentElement.remove();
        }
    }
}
