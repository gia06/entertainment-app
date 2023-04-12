import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";

function App() {
  const route = useLocation().pathname.slice(1);
  console.log(route);
  return (
    <Wrapper>
      <GlobalStyles />
      {route === "login" || route === "register" ? null : <h1>hi</h1>}

      <Outlet />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  background: #10141e;
`;
