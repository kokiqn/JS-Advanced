function solution() {
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let instructions = {
        restock(element, quantity) {
            storage[element] += quantity;
            return 'Success';
        },
        prepare(recipe, quantity) {
            let currentElement = Object.entries(recipes[recipe]);
            for (const [key, value] of currentElement) {
                if (storage[key] < value * quantity) return `Error: not enough ${key} in stock`;
                else storage[key] -= value * quantity;
            }

            return 'Success';
        },
        report() {
            let output = [];
            for (const [key, value] of Object.entries(storage)) {
                output.push(`${key}=${value}`);
            }
            return output.join(' ');
        },
    }

    return function (input) {
        let [cmd, element, quantity] = input.split(' ');
        quantity = Number(quantity);
        return instructions[cmd](element, quantity);
    }
}

let manager = solution();
console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock 
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock 
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // Error: not enough carbohydrate in stock 
