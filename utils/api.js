decks = [
    {
        id:1,
        name:'Deck 1',
        questions: [
            {
                question: "What is going on",
                answer: "nothing"
            },
            {
                question: "What is not going  on",
                answer: "everything"
            }
        ]
    },
    {
        id:2,
        name:'Deck 2',
        questions: [
            {
                question: "How are you feeling",
                answer: "nothing"
            },
            {
                question: "Whats going on",
                answer: "everything"
            },
            {
                question: "Random stuff",
                answer: "everything"
            }
        ]
    }
]


export function getDecks() {
    return decks;
}

export function getDeck(id) {
    return decks.filter(d => d.id === id)[0];
}

export function createDeck(title) {
    let newDeck = 
        {
            id: Math.floor(Math.random() * 99999),
            name: title,
            questions: []
        }
    console.log(decks);
    decks.push(newDeck)
    
    decks = decks.slice(0);
}

export function deleteDeck(id) {
    let updatedDecks = decks.filter(d => d.id !== id)
    decks = updatedDecks.slice(0);
}

export function addQuestionToDeck(deckId, question) {
    let deck = decks.filter(d => d.id === deckId)[0];
    deck.questions.push(question);
    let newDecks = decks.filter(d => d.id !== deckId);
    newDecks.push(deck);
    decks = newDecks;
}