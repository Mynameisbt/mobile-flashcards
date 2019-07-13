decks = [
    {
        id:1,
        name:'Deck 1',
        questions: [
            {
                id:1,
                question: "What is going on",
                answer: "nothing"
            },
            {
                id:2,
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
                id:1,
                question: "How are you feeling",
                answer: "nothing"
            },
            {
                id:2,
                question: "Whats going on",
                answer: "everything"
            },
            {
                id:3,
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