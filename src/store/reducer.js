import { fromJS } from 'immutable';
import types from "./types";

const defaultState = fromJS({
    deckLoading: false,
    deckSuccessful: false,
    deckFailure: false,
    deck: [],
    hand: []
});

export default function (state = defaultState, action) {
    switch (action.type) {
        case types.FETCH_DECK:
            return state.set('deckLoading', true);
        case types.FETCH_DECK_SUCCESS:
            const { deck } = action;
            return state
                .set('deckLoading', false)
                .set('deckSuccessful', true)
                .set('deck', deck);
        case types.FETCH_DECK_FAILURE:
            return state
                .set('deckLoading', false)
                .set('deckFailure', true);
        case types.ADD_CARD_DECK: {
            const { card } = action;
            state.get('deck').push(card);
            return state;
        }
        case types.REMOVE_CARD_DECK: {
            const { card } = action;
            return state.set('deck', state.get('deck').filter(o => o.code !== card.code));
        }
        case types.ADD_CARD_HAND: {
            const { card } = action;
            return state.set('hand', state.get('hand').push(card));
        }
        case types.REMOVE_CARD_HAND:
            const { card } = action;
            return state.set('hand', state.get('hand').filter(o => o.code !== card.code));
        default:
            return state;
    }
};
