import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { deck, isDeckLoading, hand, deckLoadFailed } from "./store/selectors"
import TheNavbar from './components/TheNavbar';
import { hot } from 'react-hot-loader/root';
import { addCardToHand, fetchDeck, removeCardFromHand } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const deckOfCards = useSelector(
    state => deck(state),
    shallowEqual
  );
  const hasDeckLoaded = useSelector(
    state => isDeckLoading(state),
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

  // Use useEffect with empty array to simulate on component mount and fetch cards
  useEffect(() => {
    dispatch(fetchDeck());
  }, [dispatch]);
  return (
    <div>
      <TheNavbar
        loading={hasDeckLoaded}
        title="Demo project"
        logoUrl="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        homeLink="https://www.google.com"
      >
      </TheNavbar>
      <header>
        {hasDeckLoadFailed && <h1>An error has occurred.</h1>}
      </header>
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
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
