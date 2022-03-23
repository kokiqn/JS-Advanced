function solve(input) {
    function createListProcessor() {
        let collection = [];
        return {
            add: (str) => collection.push(str),
            remove: (str) => collection = collection.filter(v => v != str),
            print: () => console.log(collection.join(',')),
        }
    }

    let listProcessor = createListProcessor();

    for (const element of input) {
        let [command, string] = element.split(' ');
        listProcessor[command](string);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
