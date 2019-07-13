import { RECEIVE_DECKS, SELECT_DECK } from '../actions'

export default function decks(state={}, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                decks: action.decks
            }
        case SELECT_DECK:
                return {
                    ...state,
                    selectedDeck: action.selectedDeck
                }
        default:
            return state;
    }
}