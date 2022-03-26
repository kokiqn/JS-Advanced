function solve(arr, order) {
    let sort = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    }
    return arr.sort(sort[order]);

    // Easy one-liner
    // return arr.sort((a, b) => order == 'asc' ? a - b : b - a); 
}

solve([14, 7, 17, 6, 8], 'asc');
