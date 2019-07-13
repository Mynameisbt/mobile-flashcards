export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const SELECT_DECK = "SELECT_DECK"
export const ADD_QUESTION = "ADD_QUESTION"
export const SAVE_QUESTION = "SAVE_QUESTION"

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function selectDeck(deck) {
    return {
        type: SELECT_DECK,
        selectedDeck: deck
    }
}



export function addQuestion(deckId, question) {
    return {
        type: ADD_QUESTION,
        deckId,
        question
    }
}

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}