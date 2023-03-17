import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: lightgreen;
  margin: 50px auto;
  width: 600px;
  padding: 20px;
  text-align: center;
`;

function AuthContainer({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default AuthContainer;
