import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const route = useLocation().pathname.slice(1);
  console.log(route);

  return (
    <HomeContainer>
      <SearchBarContainer>
        <img src="assets/icon-search.svg" />
        <SearchInput type="text" placeholder="Search for movies or TV series" />
      </SearchBarContainer>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  background-color: blue;
`;

const SearchBarContainer = styled.div`
  width: calc(100vw - 200px);
  height: 46px;
  position: absolute;
  left: 164px;
  top: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    width: calc(100vw - 50px);
    top: 128px;
    left: 25px;
  }

  @media (max-width: 400px) {
    top: 80px;
    left: 16px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 24px;
  background-color: transparent;
  outline: none;
  border: none;
  caret-color: #fc4747;
  color: white;

  font-weight: 300;
  font-size: 24px;
  line-height: 30px;

  ::placeholder {
    color: white;
    opacity: 0.5;
  }

  :focus {
    border-bottom: 1px solid #5a698f;
  }

  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
