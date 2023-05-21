import { Link } from "react-router-dom";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { useState } from "react";

function NavBar() {
  const [selectedLink, setSelectedLink] = useState<string>("home");

  return (
    <NavBarContainer>
      <LinkContainer>
        <Link to="home">
          <img src="assets/logo.svg"></img>
        </Link>

        <Link to="home">
          <NavIcon
            src="assets/icon-nav-home.svg"
            isSelected={selectedLink === "home"}
            onClick={() => setSelectedLink("home")}
          />
        </Link>

        <Link to="movies">
          <NavIcon
            src="assets/icon-nav-movies.svg"
            isSelected={selectedLink === "movies"}
            onClick={() => setSelectedLink("movies")}
          />
        </Link>

        <Link to="tv-series">
          <NavIcon
            src="assets/icon-nav-tv-series.svg"
            isSelected={selectedLink === "tv-series"}
            onClick={() => setSelectedLink("tv-series")}
          />
        </Link>

        <Link to="bookmarks">
          <NavIcon
            src="assets/icon-nav-bookmark.svg"
            isSelected={selectedLink === "bookmarks"}
            onClick={() => setSelectedLink("bookmarks")}
          />
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

  /* // * for removing highlight on mobile */
  /* a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
    -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
  } */

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

interface NavIconProps {
  isSelected: boolean;
}

const NavIcon = styled(SVG)<NavIconProps>`
  & path {
    fill: ${({ isSelected }) => (isSelected ? "white" : null)};
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;

  ${NavIcon}:hover {
    & path {
      fill: #fc4747;
    }
  }
`;
