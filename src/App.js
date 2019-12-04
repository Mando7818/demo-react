import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { deck, isDeckLoading, hand, deckLoadFailed } from "./store/selectors"
import BarLoader from "react-spinners/BarLoader";
import { hot } from 'react-hot-loader/root'
import { addCardToHand, fetchDeck, removeCardFromHand } from './store/actions';
import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <BarLoader
        size={150}
        loading={hasDeckLoaded}
      />
      <header className="App-header">
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
