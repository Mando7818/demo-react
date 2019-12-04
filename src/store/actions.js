import types from "./types.js";

export const fetchDeck = () => (dispatch, getState) => {
    const allDeckCardsUrl = `${process.env.REACT_APP_DECK_URL}deck/new/draw/?count=52&deckCount=1`
    dispatch({ type: types.FETCH_DECK })
    fetch(allDeckCardsUrl)
        .then(res => res.json())
        .then(deck => {
            dispatch(fetchDeckSuccess(deck.cards));
        })
        .catch(error => {
            dispatch(fetchDeckError());
        });
};

const fetchDeckSuccess = (deck) => {
    return {
        type: types.FETCH_DECK_SUCCESS,
        deck
    }
}

const fetchDeckError = () => ({
    type: types.FETCH_DECK_FAILURE,
});

export const addCardToHand = (card) => (dispatch) => {
    dispatch({
        type: types.ADD_CARD_HAND,
        card,
    });
    dispatch({
        type: types.REMOVE_CARD_DECK,
        card,
    });
};

// const removeCardDeck = (card) => (dispatch) => {
//     dispatch({
//         type: types.REMOVE_CARD_DECK,
//         card,
//     });
// };

export const removeCardFromHand = (card) => (dispatch, getState) => {
    dispatch({
        type: types.REMOVE_CARD_HAND,
        card,
    });
    dispatch({
        type: types.ADD_CARD_DECK,
        card,
    });
};

const pushCardBackToDeck = (card) => (dispatch, getState) => {

};

export default {
    fetchDeck,
    addCardToHand,
    removeCardFromHand,
};
