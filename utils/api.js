import { AsyncStorage } from 'react-native'

KEY = "btmobileflashcards"

decks = []

export function getDecks() {
    return new Promise(function(resolve) {
        AsyncStorage.getItem(KEY).then((result) => {
            if (result == null) {
              decks = []
            } else {
              decks = JSON.parse(result)
            }
            resolve(decks);
        });   
    })
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
    AsyncStorage.setItem(KEY,JSON.stringify(decks))

}

export function deleteDeck(id) {
    let updatedDecks = decks.filter(d => d.id !== id)
    decks = updatedDecks.slice(0);
    AsyncStorage.setItem(KEY,JSON.stringify(decks))

}

export function addQuestionToDeck(deckId, question) {
    let deck = decks.filter(d => d.id === deckId)[0];
    deck.questions.push(question);
    let newDecks = decks.filter(d => d.id !== deckId);
    newDecks.push(deck);
    decks = newDecks;
    AsyncStorage.setItem(KEY,JSON.stringify(decks))
}