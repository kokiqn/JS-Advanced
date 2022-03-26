function solve(input) {
    let cars = {};
    let commandProcessor = {
        create: (name, inherit, parent) => cars[name] = inherit ? Object.create(cars[parent]) : {},
        set: (name, key, value) => cars[name][key] = value,
        print: (name) => {
            let result = [];
            for (const key in cars[name]) {
                result.push(`${key}:${cars[name][key]}`)
            }
            console.log(result.join(','));
        }
    }

    for (const args of input) {
        let [command, ...props] = args.split(' ');
        commandProcessor[command].apply(undefined, props);
    }
}

solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);
