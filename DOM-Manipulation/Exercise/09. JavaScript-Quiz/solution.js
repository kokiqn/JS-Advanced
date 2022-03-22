function solve() {
    let quizzieDiv = document.getElementById('quizzie');
    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let questionSections = Array.from(document.querySelectorAll('section'));
    let rightAnswers = 0;

    quizzieDiv.addEventListener('click', onClick);

    function onClick(e) {
        let answerText = e.target;
        if (answerText.classList[0] != 'answer-text') return;
        if (correctAnswers.includes(answerText.textContent)) rightAnswers++;

        questionSections.shift().style.display = 'none';
        if (questionSections.length) {
            questionSections[0].style.display = 'block';
        } else {
            document.getElementById('results').style.display = 'block';
            document.querySelector('li > h1').textContent = rightAnswers == 3 ? 'You are recognized as top JavaScript fan!' : `You have ${rightAnswers} right answers`;
        }
    }
}
