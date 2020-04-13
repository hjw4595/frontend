import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Footer";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

export default () => {

  const {data} = useQuery(QUERY);
  console.log(data);

    return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
      <GlobalStyles />
      <Router isLoggedIn= {false}></Router>
        <Footer />
      </Wrapper>
    </ThemeProvider>
    );
  };