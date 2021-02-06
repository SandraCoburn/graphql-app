import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  green: ' #c1e5e3',
  black: '#866f57',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

injectGlobal` 
@font-face {
  font-family: "radnika_next";
  src: url("/static/radnikanext-medium-webfont.woff2")
  format("woff2");
  font-weight: normal;
  font-style: normal;
}
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after{
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
  font-family: "radnika_next", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a{
  text-decoration:none;
  color: #866f57;
}
`;

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`;
const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
