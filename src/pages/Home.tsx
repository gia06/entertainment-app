import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      {/* <SearchBarContainer>
        <img src="assets/icon-search.svg" />
        <SearchInput type="text" />
      </SearchBarContainer> */}
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;

const SearchBarContainer = styled.div`
  position: absolute;
`;

const SearchInput = styled.input``;
