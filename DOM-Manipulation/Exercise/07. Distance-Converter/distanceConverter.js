function attachEventsListeners() {
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');
    let convertButton = document.getElementById('convert');
    let inputField = document.getElementById('inputDistance');
    let outputField = document.getElementById('outputDistance');

    convertButton.addEventListener('click', conversion);

    function conversion() {
        let valuesInMeters = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        };

        let inputDistance = inputField.value * valuesInMeters[inputUnits.value];
        let outputDistance = inputDistance / valuesInMeters[outputUnits.value];

        outputField.value = outputDistance;
    }
}
