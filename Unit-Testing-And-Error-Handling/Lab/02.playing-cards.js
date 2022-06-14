function solve(face, suit) {
    let cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };
    if (cardFaces.indexOf(face) == -1 || cardSuits[suit] == undefined) throw new Error();
    return `${face}${cardSuits[suit]}`;
}
console.log(solve('10', 'H'));
