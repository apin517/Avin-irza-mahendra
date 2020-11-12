import React from "react";
import styled from "styled-components";
import TicTacToe from "./TicTacToe";
import "papercss/dist/paper.min.css";

function App() {
  return (
    <>
      <Main>
      <b><h1>permainan Tic Tac Toe</h1></b>
        <TicTacToe />
      </Main>
      <Footer>
        <FooterInner>
          Avin Irza Mahendra
          SP.3.2 / 1119101711{" "}
          <a href="https://github.com/Avin169/apin.git">Github</a>
        </FooterInner>
      </Footer>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 0 0 auto;
`;

const FooterInner = styled.div`
  padding: 16px 0;
`;
export default App;
