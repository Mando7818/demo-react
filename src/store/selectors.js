import { createSelector } from 'reselect';

const cardsState = state => state.deckReducer;

export const deck = createSelector(
    cardsState,
    state => state.get('deck')
);

export const isDeckLoading = createSelector(
    cardsState,
    state => state.get('deckLoading')
);

export const deckLoadSuccessful = createSelector(
    cardsState,
    state => state.get('deckSuccessful')
);

export const deckLoadFailed = createSelector(
    cardsState,
    state => state.get('deckFailure')
);

export const hand = createSelector(
    cardsState,
    state => state.get('hand')
);


