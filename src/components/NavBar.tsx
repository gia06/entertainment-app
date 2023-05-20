import { Link } from "react-router-dom";
import styled from "styled-components";
import SVG from "react-inlinesvg";

function NavBar() {
  return (
    <NavBarContainer>
      <LinkContainer>
        <Link to="home">
          <img src="assets/logo.svg"></img>
        </Link>

        <Link to="home">
          <NavIcon src="assets/icon-nav-home.svg" />
        </Link>

        <Link to="movies">
          <NavIcon src="assets/icon-nav-movies.svg" />
        </Link>

        <Link to="tv-series">
          <NavIcon src="assets/icon-nav-tv-series.svg" />
        </Link>

        <Link to="bookmarks">
          <NavIcon src="assets/icon-nav-bookmark.svg" />
        </Link>
      </LinkContainer>

      <img id="avatar" src="assets/image-avatar.png" />
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 96px;
  height: calc(100vh - 64px);

  margin: 32px 0px 32px 32px;
  background-color: #161d2f;
  border-radius: 20px;

  a {
    /* // * for removing highlight on mobile */
    /* -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
    -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important; */
  }

  a:nth-child(1) {
    margin: 35px 0px 35px;
  }

  #avatar {
    width: 40px;
    border-radius: 50%;
    border: 1px solid white;
    margin-bottom: 32px;
    cursor: pointer;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
`;

const NavIcon = styled(SVG)`
  :hover {
    & path {
      fill: #fc4747;
    }
  }
`;
