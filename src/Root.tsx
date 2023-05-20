import { Outlet, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { defaultTheme } from "./theme/defaultTheme";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavBar from "./components/NavBar";

function App() {
  const route = useLocation().pathname.slice(1);

  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={defaultTheme}>
          <RootContainer>
            <GlobalStyles />
            <Helmet>
              <link
                href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap"
                rel="stylesheet"
              />
              <link rel="icon" type="image/png" href="favicon.png" />
              <title>Movies & TV Shows </title>
            </Helmet>
            {route === "login" || route === "register" ? null : <NavBar />}
            <Outlet />
          </RootContainer>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;

const RootContainer = styled.div`
  height: 100vh;
  /* background: ${({ theme }) => theme.colors.backgroundColor}; */
`;
