import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { deck, hand, deckLoadFailed } from "../../store/selectors"
import { addCardToHand, fetchDeck, removeCardFromHand } from '../../store/actions';
import Container from './components/Container';
import Card from './components/Card';

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

  // TODO: turn below into dummy components and put them in components folder. To have this
  // file solely focus on business logic. 
  return (
    <>
      <Container>
        {hasDeckLoadFailed ? <h1>An error has occurred.</h1> : <>
          <h4>
            Intro:
            <br />
            So below you have a "hand" and a "deck".
            You add cards from the deck to your hand by selecting them. If you remove a
            card from your hand, it gets recycled back into your deck. All cards are unique.
          </h4>
          <h4>Current Hand:</h4>
          {cardsFromHand.size === 0 ?
            <p>No cards in hand. Please select one from deck.</p> :
            <div>
              {cardsFromHand.map((card) => <Card
                onClick={() => removeCardFromHandToDeck(card)}
                style={{ width: '10%' }}
                key={card.code}
                url={card.image}>
              </Card>)}
            </div>}
          <hr />
          <h4>Deck:</h4>
          <div>
            {deckOfCards.map((card) => <Card
              onClick={() => addCardFromDeckToHand(card)}
              key={card.code}
              url={card.image}>
            </Card>)}
          </div>
        </>}
      </Container>
    </>
  );
}

export default Demo;
