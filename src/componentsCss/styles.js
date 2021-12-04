import styled from "styled-components";

export const BlogContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0 auto;
  margin-block-start: 5rem;
  width: 700px;
  & .active {
    border-top: 3px solid black;
  }
  & a {
    text-decoration: none;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & nav ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
`;

export const UserContainer = styled.div`
  & ul {
    display: flex;
    flex-direction: column;
  }
`;

export const UserCont = styled.div`
  display: flex;
  flex-direction: column;
`;
