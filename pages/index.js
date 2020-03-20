import react from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
`


const Header = styled.div`
  display: flex;
`


const Main = styled.div`
  display: flex;
`

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>TwoWeeksOfFood</title>
        <link href="https://fonts.googleapis.com/css?family=Sen:400,700,800&display=swap" rel="stylesheet" />
      </Head>
      <Header>
        <h1>TwoWeeksOfFood</h1>
      </Header>
      <Main>

      </Main>
    </Wrapper>
  )
}