import React from "react";
import styled from "styled-components";
import CreateMessage from "./components/CreateMessage";

const MainContainer = styled.div`
  background-color: #d8b4a0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <CreateMessage />
    </MainContainer>
  );
}

export default App;
