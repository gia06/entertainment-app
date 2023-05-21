import { Link } from "react-router-dom";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { useState } from "react";
import { NavIconProps } from "../types/styles";

function NavBar() {
  const [selectedLink, setSelectedLink] = useState<string>("home");

  return (
    <NavBarContainer>
      <Link to="home">
        <img src="assets/logo.svg"></img>
      </Link>
      <LinkContainer>
        <Link to="home">
          <NavIcon
            src="assets/icon-nav-home.svg"
            $isSelected={selectedLink === "home"}
            onClick={() => setSelectedLink("home")}
          />
        </Link>

        <Link to="movies">
          <NavIcon
            src="assets/icon-nav-movies.svg"
            $isSelected={selectedLink === "movies"}
            onClick={() => setSelectedLink("movies")}
          />
        </Link>

        <Link to="tv-series">
          <NavIcon
            src="assets/icon-nav-tv-series.svg"
            $isSelected={selectedLink === "tv-series"}
            onClick={() => setSelectedLink("tv-series")}
          />
        </Link>

        <Link to="bookmarks">
          <NavIcon
            src="assets/icon-nav-bookmark.svg"
            $isSelected={selectedLink === "bookmarks"}
            onClick={() => setSelectedLink("bookmarks")}
          />
        </Link>
      </LinkContainer>

      <Avatar
        id="avatar"
        src="assets/image-avatar.png"
        draggable={false}
        onDragStart={(event) => event.preventDefault()}
      />
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 96px;
  height: calc(100vh - 64px);
  padding: 35px 0px 32px 0px;
  position: absolute;
  top: 35px;
  left: 32px;
  background-color: #161d2f;
  border-radius: 20px;

  /* // * for removing highlight on mobile */
  /* a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
    -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
  } */

  a:first-child {
    @media (max-width: 768px) {
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    width: calc(100vw - 50px);
    height: 72px;
    flex-direction: row;
    padding: 0px 16px 0px 24px;
  }
`;

const NavIcon = styled(SVG)<NavIconProps>`
  & path {
    fill: ${({ $isSelected }) => ($isSelected ? "white" : null)};
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  position: absolute;
  top: 135.6px;

  @media (min-width: 768px) {
    ${NavIcon}:hover {
      & path {
        fill: #fc4747;
      }
    }
  }

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    flex-direction: row;
    justify-self: center;
    gap: 32px;
  }
`;

const Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
  border: 1px solid white;
  user-select: none;
  cursor: pointer;
`;
