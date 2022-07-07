import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: Firebrick;
`;

const ButtonNav = styled.button`
  border-radius: 4px;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  background-color: Firebrick;
  display: inline-block;
  color: white;
  border: 2px solid white;
`;
export { StyledNav, ButtonNav };
