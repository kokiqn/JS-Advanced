function createSortedList() {
  let listOfNumbers = [];
  return {
    add(element) {
      if (typeof (element) == 'number') {
        listOfNumbers.push(element);
        listOfNumbers.sort((a, b) => a - b);
      } else {
        throw new Error('This list takes numbers only.')
      }
    },
    remove(index) {
      if (index < 0 || index >= listOfNumbers.length) {
        throw new Error('Invalid index!')
      } else {
        return listOfNumbers.splice(index, 1);
      }
    },
    get(index) {
      if (index < 0 || index >= listOfNumbers.length) {
        throw new Error('Invalid index!')
      } else {
        return listOfNumbers[index];
      }
    },
    get size() {
      return listOfNumbers.length;
    }
  }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
