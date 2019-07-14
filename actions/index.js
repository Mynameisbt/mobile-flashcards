export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const SELECT_DECK = "SELECT_DECK"

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function selectDeck(deckId) {
    return {
        type: SELECT_DECK,
        selectedDeck: deckId
    }
}

