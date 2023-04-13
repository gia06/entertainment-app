import { Outlet, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Helmet } from "react-helmet";
import { defaultTheme } from "./theme/defaultTheme";

function App() {
  const route = useLocation().pathname.slice(1);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Wrapper>
          <GlobalStyles />
          <Helmet>
            {/* adding font */}
            <link
              href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          {route === "login" || route === "register" ? null : <h1>hi</h1>}
          <Outlet />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.backgroundColor};
`;
