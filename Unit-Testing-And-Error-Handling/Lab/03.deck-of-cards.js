function printDeckOfCards(cards) {
    let deckOfCards = [];

    function createCard(card) {
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const cardSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        let face = (card.length > 2) ? card.substring(0, 2) : card[0];
        let suit = card[card.length - 1];

        if (!cardFaces.includes(face) || cardSuits[suit] == undefined) throw new Error(`Invalid card: ${card}`);
        return `${face}${cardSuits[suit]}`;
    }

    for (let i = 0; i < cards.length; i++) {
        try {
            deckOfCards.push(createCard(cards[i]));
        } catch (error) {
            console.log(error.message);
            return;
        }
    }

    console.log(deckOfCards.join(' '));
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);
