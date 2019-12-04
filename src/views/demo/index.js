import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { deck, hand, deckLoadFailed } from "../../store/selectors"
import { addCardToHand, fetchDeck, removeCardFromHand } from '../../store/actions';
import Container from './components/Container';

function Demo() {
  const dispatch = useDispatch();
  const deckOfCards = useSelector(
    state => deck(state),
    shallowEqual
  );
  const cardsFromHand = useSelector(
    state => hand(state),
    shallowEqual
  );
  const hasDeckLoadFailed = useSelector(
    state => deckLoadFailed(state),
    shallowEqual
  );

  const addCardFromDeckToHand = (card) => {
    dispatch(addCardToHand(card));
  }

  const removeCardFromHandToDeck = (card) => {
    dispatch(removeCardFromHand(card));
  }

  useEffect(() => {
    dispatch(fetchDeck());
  }, [dispatch]);

  // TODO: turn below into dummy components and put them in components folder.
  return (
    <Container>
      {hasDeckLoadFailed ? <h1>An error has occurred.</h1> : <>
        <p>
          {cardsFromHand.map((card) => <img
            onClick={() => removeCardFromHandToDeck(card)}
            style={{ width: '10%' }}
            key={card.code}
            src={card.image}>
          </img>)}
        </p>
        <hr />
        <p>
          {deckOfCards.map((card) => <img
            onClick={() => addCardFromDeckToHand(card)}
            style={{ width: '10%' }}
            key={card.code}
            src={card.image}>
          </img>)}
        </p>
      </>}
    </Container>
  );
}

export default Demo;
