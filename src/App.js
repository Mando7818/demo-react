import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

import { isDeckLoading } from "./store/selectors"
import TheNavbar from './components/TheNavbar';
import TheFooter from './components/TheFooter';
import TheContent from './components/TheContent';
import DemoContent from './views/demo';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

function App() {
  // This would be a general selector for any promises waiting on a request to resolve.
  const hasDeckLoaded = useSelector(
    state => isDeckLoading(state),
    shallowEqual
  );

  return (
    <Wrapper>
      <TheNavbar
        loading={hasDeckLoaded}
        title="Demo project"
        logoUrl="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        homeLink="https://www.google.com"
      />
      <TheContent>
        <DemoContent />
      </TheContent>
      <TheFooter text="Copyright 2019 Bizx LLC." />
    </Wrapper>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
