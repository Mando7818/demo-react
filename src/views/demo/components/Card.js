import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardImage = styled.img`
  width: 10%;
  min-width: 58px;
`;

const Card = (props) =>
    <CardImage src={props.url} {...props}>
    </CardImage>;

Card.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Card;
