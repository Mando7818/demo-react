import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BarLoader from "react-spinners/BarLoader";

const Navbar = styled.nav`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  padding: 10px;
  border-bottom: 2px solid black;
  background-color: white;
`;

const NavTitle = styled.h1`
  font-size: 18px;
`;

const CenterImage = styled.img`
  max-width: 130px;
  max-height: 30px;
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const Link = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: #037f03;
  text-transform: uppercase;
  display: flex;
  font-weight: bold;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: 1;
`;

const TheNavbar = ({ logoUrl, title, homeLink, loading }) =>
  <>
    <LoaderWrapper>
      <BarLoader
        css="width: 100%;"
        loading={loading}
      />
    </LoaderWrapper>
    <Navbar>
      <NavTitle>{title}</NavTitle>
      <CenterImage src={logoUrl} alt="logo"></CenterImage>
      <Link href={homeLink}>home</Link>
    </Navbar>
  </>;

// Specifies the default values for props:
TheNavbar.defaultProps = {
  loading: false,
};

TheNavbar.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  homeLink: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default TheNavbar;
