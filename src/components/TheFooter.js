import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Footer = styled.footer`
  min-height: 60px;
  padding: 10px;
  text-align: center;
  background-color: #cccccc;
`;

const Content = styled.p`
  font-size: 18px;
`;

const TheFooter = ({ text }) =>
  <Footer>
    <Content>{text}</Content>
  </Footer>;

TheFooter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TheFooter;
