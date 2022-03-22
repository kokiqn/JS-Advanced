function solve(area, vol, input) {
    let coordinatesArr = JSON.parse(input);

    function calculate(coordinates) {
        return {
            area: area.call(coordinates),
            volume: vol.call(coordinates),
        }
    }

    return coordinatesArr.map(calculate);
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);
