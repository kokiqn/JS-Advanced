function encodeAndDecodeMessages() {
    let mainElement = document.querySelector('main'); // it can also be done by adding an event listener to each button
    let [sendMsg, receiveMsg] = document.querySelectorAll('textarea');

    mainElement.addEventListener('click', (e) => {
        if (e.target.nodeName != 'BUTTON') return;

        let msg = [];

        if (e.target.textContent.toLowerCase().includes('encode')) {
            let letters = sendMsg.value.split('');
            letters.forEach(l => msg.push(String.fromCharCode(l.charCodeAt(0) + 1)));
            sendMsg.value = '';
        } else {
            let letters = receiveMsg.value.split('');
            letters.forEach(l => msg.push(String.fromCharCode(l.charCodeAt(0) - 1)));
            e.target.setAttribute('disabled', true)
        }

        receiveMsg.value = msg.join('');
    })
}
